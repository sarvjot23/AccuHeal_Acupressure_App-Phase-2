import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from '@components';
import { Colors, Typography, Spacing } from '@constants';
import { updateSearchIndex, testNewPoints } from '@utils/updateSearchIndex';

export const AdminUpdateScreen: React.FC = () => {
  const [status, setStatus] = useState<string>('Ready to update search index');
  const [isUpdating, setIsUpdating] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
    console.log(message);
  };

  const handleUpdateIndex = async () => {
    if (isUpdating) return;
    
    setIsUpdating(true);
    setStatus('Updating search index...');
    setLogs([]);
    
    try {
      addLog('🚀 Starting search index update...');
      await updateSearchIndex();
      addLog('✅ Search index updated successfully!');
      setStatus('Search index updated successfully!');
    } catch (error) {
      addLog(`❌ Update failed: ${error.message}`);
      setStatus('Update failed');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleTestNewPoints = async () => {
    if (isUpdating) return;
    
    setIsUpdating(true);
    setStatus('Testing new points...');
    
    try {
      addLog('🧪 Testing new everyday essential points...');
      await testNewPoints();
      addLog('✅ All new points tested successfully!');
      setStatus('New points tested successfully!');
    } catch (error) {
      addLog(`❌ Test failed: ${error.message}`);
      setStatus('Test failed');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Admin: Search Index Update</Text>
        <Text style={styles.subtitle}>Update search with new everyday essential points</Text>
        
        <View style={styles.statusContainer}>
          <Text style={styles.statusLabel}>Status:</Text>
          <Text style={styles.statusText}>{status}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title={isUpdating ? 'Updating...' : 'Update Search Index'}
            onPress={handleUpdateIndex}
            loading={isUpdating}
            size="lg"
            fullWidth
            style={styles.button}
          />
          
          <Button
            title={isUpdating ? 'Testing...' : 'Test New Points'}
            onPress={handleTestNewPoints}
            loading={isUpdating}
            size="lg"
            fullWidth
            variant="outline"
            style={styles.button}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>What this does:</Text>
          <Text style={styles.infoText}>
            • Re-indexes all 69 acupressure points in Typesense{'\n'}
            • Includes 16 new everyday essential points{'\n'}
            • Makes new points searchable in the app{'\n'}
            • Tests search functionality for new points
          </Text>
        </View>

        {logs.length > 0 && (
          <View style={styles.logsContainer}>
            <Text style={styles.logsTitle}>Logs:</Text>
            <ScrollView style={styles.logsScroll} showsVerticalScrollIndicator={false}>
              {logs.map((log, index) => (
                <Text key={index} style={styles.logText}>
                  {log}
                </Text>
              ))}
            </ScrollView>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.secondary,
  },
  scrollView: {
    flex: 1,
    padding: Spacing.md,
  },
  title: {
    ...Typography.h3,
    color: Colors.text.primary,
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...Typography.body1,
    color: Colors.text.secondary,
    marginBottom: Spacing.lg,
    textAlign: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.lg,
    padding: Spacing.md,
    backgroundColor: Colors.background.primary,
    borderRadius: 8,
  },
  statusLabel: {
    ...Typography.h6,
    color: Colors.text.primary,
    marginRight: Spacing.sm,
  },
  statusText: {
    ...Typography.body1,
    color: Colors.primary[600],
    flex: 1,
  },
  buttonContainer: {
    marginBottom: Spacing.lg,
  },
  button: {
    marginBottom: Spacing.md,
  },
  infoContainer: {
    padding: Spacing.md,
    backgroundColor: Colors.primary[50],
    borderRadius: 8,
    marginBottom: Spacing.lg,
  },
  infoTitle: {
    ...Typography.h6,
    color: Colors.text.primary,
    marginBottom: Spacing.sm,
  },
  infoText: {
    ...Typography.body2,
    color: Colors.text.secondary,
    lineHeight: 20,
  },
  logsContainer: {
    backgroundColor: Colors.background.primary,
    borderRadius: 8,
    padding: Spacing.md,
    maxHeight: 300,
  },
  logsTitle: {
    ...Typography.h6,
    color: Colors.text.primary,
    marginBottom: Spacing.sm,
  },
  logsScroll: {
    flex: 1,
  },
  logText: {
    ...Typography.caption,
    color: Colors.text.secondary,
    fontFamily: 'monospace',
    marginBottom: 2,
  },
});

export default AdminUpdateScreen;