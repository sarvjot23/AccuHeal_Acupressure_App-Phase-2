import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  DocumentSnapshot,
} from 'firebase/firestore';
import { db } from './firebase';
import { AcupressurePoint } from '@types';

export class FirestoreService {
  // Collections
  private pointsCollection = collection(db, 'acupressurePoints');

  // Get a single acupressure point by ID
  async getPoint(id: string): Promise<AcupressurePoint | null> {
    try {
      const pointDoc = await getDoc(doc(this.pointsCollection, id));
      if (pointDoc.exists()) {
        return { id: pointDoc.id, ...pointDoc.data() } as AcupressurePoint;
      }
      return null;
    } catch (error) {
      console.error('Error fetching point:', error);
      throw error;
    }
  }

  // Get all acupressure points
  async getAllPoints(): Promise<AcupressurePoint[]> {
    try {
      const snapshot = await getDocs(this.pointsCollection);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as AcupressurePoint[];
    } catch (error) {
      console.error('Error fetching all points:', error);
      throw error;
    }
  }

  // Get points by body part
  async getPointsByBodyPart(bodyPart: string): Promise<AcupressurePoint[]> {
    try {
      const q = query(
        this.pointsCollection,
        where('bodyPart', '==', bodyPart),
        orderBy('code')
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as AcupressurePoint[];
    } catch (error) {
      console.error('Error fetching points by body part:', error);
      throw error;
    }
  }

  // Get points by condition
  async getPointsByCondition(condition: string): Promise<AcupressurePoint[]> {
    try {
      const q = query(
        this.pointsCollection,
        where('conditions', 'array-contains', condition),
        orderBy('code')
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as AcupressurePoint[];
    } catch (error) {
      console.error('Error fetching points by condition:', error);
      throw error;
    }
  }

  // Get popular points (you can implement your own logic for popularity)
  async getPopularPoints(limitCount = 10): Promise<AcupressurePoint[]> {
    try {
      const q = query(
        this.pointsCollection,
        orderBy('code'),
        limit(limitCount)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as AcupressurePoint[];
    } catch (error) {
      console.error('Error fetching popular points:', error);
      throw error;
    }
  }

  // Get points with pagination
  async getPointsPaginated(
    limitCount = 20,
    lastVisible?: DocumentSnapshot
  ): Promise<{ points: AcupressurePoint[]; lastVisible: DocumentSnapshot | null }> {
    try {
      let q = query(
        this.pointsCollection,
        orderBy('code'),
        limit(limitCount)
      );

      if (lastVisible) {
        q = query(
          this.pointsCollection,
          orderBy('code'),
          startAfter(lastVisible),
          limit(limitCount)
        );
      }

      const snapshot = await getDocs(q);
      const points = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as AcupressurePoint[];

      const newLastVisible = snapshot.docs[snapshot.docs.length - 1] || null;

      return { points, lastVisible: newLastVisible };
    } catch (error) {
      console.error('Error fetching paginated points:', error);
      throw error;
    }
  }

  // Search points by multiple criteria
  async searchPoints(searchTerms: {
    bodyPart?: string;
    conditions?: string[];
    difficulty?: string;
  }): Promise<AcupressurePoint[]> {
    try {
      let q = query(this.pointsCollection);

      if (searchTerms.bodyPart) {
        q = query(q, where('bodyPart', '==', searchTerms.bodyPart));
      }

      if (searchTerms.difficulty) {
        q = query(q, where('difficulty', '==', searchTerms.difficulty));
      }

      // Note: Firestore doesn't support multiple array-contains queries
      // For conditions search, we'll need to use Algolia or implement client-side filtering

      q = query(q, orderBy('code'));

      const snapshot = await getDocs(q);
      let points = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as AcupressurePoint[];

      // Client-side filtering for conditions if needed
      if (searchTerms.conditions && searchTerms.conditions.length > 0) {
        points = points.filter(point =>
          searchTerms.conditions!.some(condition =>
            point.conditions.includes(condition)
          )
        );
      }

      return points;
    } catch (error) {
      console.error('Error searching points:', error);
      throw error;
    }
  }
}

export const firestoreService = new FirestoreService();