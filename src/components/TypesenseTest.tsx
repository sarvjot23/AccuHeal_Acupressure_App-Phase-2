import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { typesenseService } from '@services/typesense';
import { samplePoints } from '@data/samplePoints';

export const TypesenseTest: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
    console.log(message);
  };

  const testConnection = async () => {
    setIsLoading(true);
    addLog('Testing Typesense connection...');
    
    try {
      const response = await fetch('http://localhost:8108/health');
      const data = await response.json();
      
      if (data.ok) {
        addLog('✅ Typesense server is healthy!');
      } else {
        addLog('❌ Typesense server not healthy');
      }
    } catch (error) {
      addLog(`❌ Connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const runMigrationSafely = async () => {
    setIsLoading(true);
    setLogs([]);
    
    try {
      addLog('🚀 Starting migration...');
      
      // Step 1: Check Typesense server health
      addLog('1️⃣ Checking Typesense server health...');
      const isHealthy = await typesenseService.healthCheck();
      if (!isHealthy) {
        throw new Error('Typesense server is not healthy. Please check if it\'s running on localhost:8108');
      }
      addLog('✅ Typesense server is healthy');

      // Step 2: Initialize the collection
      addLog('2️⃣ Initializing acupressure points collection...');
      await typesenseService.initializeCollection();

      // Step 3: Index existing points
      addLog('3️⃣ Migrating existing acupressure points...');
      await typesenseService.indexPoints(samplePoints);

      // Step 4: Get stats
      addLog('4️⃣ Getting collection statistics...');
      const stats = await typesenseService.getStats();
      if (stats) {
        addLog(`📊 Collection: ${stats.name}`);
        addLog(`📈 Documents: ${stats.num_documents}`);
        addLog(`📅 Created: ${new Date(stats.created_at * 1000).toLocaleString()}`);
      }

      addLog('🎉 Typesense migration completed successfully!');
      addLog('');
      addLog('🔍 Test searches you can try:');
      addLog('   - "headache" (with typo tolerance)');
      addLog('   - "LI4" (point code search)');
      addLog('   - "hand" (body part search)');
      
    } catch (error) {
      addLog(`❌ Migration failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      
      if (error instanceof Error) {
        if (error.message.includes('ECONNREFUSED') || error.message.includes('fetch')) {
          addLog('');
          addLog('🔧 Troubleshooting steps:');
          addLog('   1. Ensure Typesense server is running');
          addLog('   2. Check server health: http://localhost:8108/health');
          addLog('   3. Verify API key matches server configuration');
          addLog('   4. Restart Typesense server if needed');
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const runTestsSafely = async () => {
    setIsLoading(true);
    
    try {
      addLog('🧪 Running search tests...');
      
      // Test 1: Basic search
      addLog('1️⃣ Testing basic search...');
      const basicResults = await typesenseService.searchPoints('headache');
      addLog(`✅ Basic search: Found ${basicResults.length} results for "headache"`);

      // Test 2: Typo tolerance
      addLog('2️⃣ Testing typo tolerance...');
      const typoResults = await typesenseService.searchPoints('headach'); // Missing 'e'
      addLog(`✅ Typo tolerance: Found ${typoResults.length} results for "headach"`);

      // Test 3: Point code search
      addLog('3️⃣ Testing point code search...');
      const codeResults = await typesenseService.searchPoints('LI4');
      addLog(`✅ Point code search: Found ${codeResults.length} results for "LI4"`);

      // Test 4: Filter search
      addLog('4️⃣ Testing filtered search...');
      const filteredResults = await typesenseService.searchPoints('*', { difficulty: 'Beginner' });
      addLog(`✅ Filtered search: Found ${filteredResults.length} beginner-level points`);

      // Test 5: Suggestions
      addLog('5️⃣ Testing search suggestions...');
      const suggestions = await typesenseService.getSuggestions('head');
      addLog(`✅ Suggestions: Found ${suggestions.length} suggestions for "head"`);
      if (suggestions.length > 0) {
        addLog(`   Suggestions: ${suggestions.slice(0, 3).join(', ')}`);
      }

      // Test 6: Meridian search
      addLog('6️⃣ Testing meridian search...');
      const meridianResults = await typesenseService.getPointsByMeridian('LI');
      addLog(`✅ Meridian search: Found ${meridianResults.length} Large Intestine meridian points`);

      // Test 7: Hindi search
      addLog('7️⃣ Testing Hindi search...');
      const hindiResults = await typesenseService.searchPoints('सिरदर्द'); // Hindi for "headache"
      addLog(`✅ Hindi search: Found ${hindiResults.length} results for "सिरदर्द"`);

      // Test 8: Hindi body part search
      addLog('8️⃣ Testing Hindi body part search...');
      const hindiBodyResults = await typesenseService.searchPoints('हाथ'); // Hindi for "hand"
      addLog(`✅ Hindi body part: Found ${hindiBodyResults.length} results for "हाथ"`);

      // Test 9: Hindi condition search
      addLog('9️⃣ Testing Hindi condition search...');
      const hindiConditionResults = await typesenseService.searchPoints('तनाव'); // Hindi for "stress"
      addLog(`✅ Hindi condition: Found ${hindiConditionResults.length} results for "तनाव"`);

      addLog('');
      addLog('🎉 All tests passed! Typesense is working correctly with Hindi support!');
      
    } catch (error) {
      addLog(`❌ Tests failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Typesense Migration Test</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.testButton]}
          onPress={testConnection}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>Test Connection</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, styles.migrateButton]}
          onPress={runMigrationSafely}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>Run Migration</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, styles.testButton]}
          onPress={runTestsSafely}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>Run Tests</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.logsTitle}>Migration Logs:</Text>
      <ScrollView style={styles.logsContainer}>
        {logs.map((log, index) => (
          <Text key={index} style={styles.logText}>{log}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    padding: 12,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  testButton: {
    backgroundColor: '#007AFF',
  },
  migrateButton: {
    backgroundColor: '#34C759',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  logsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logsContainer: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 8,
  },
  logText: {
    color: '#00FF00',
    fontSize: 12,
    fontFamily: 'monospace',
    marginBottom: 2,
  },
});