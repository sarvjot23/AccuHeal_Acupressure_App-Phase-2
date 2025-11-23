import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Colors, Typography, Spacing, BorderRadius } from '../constants';
import { useAuth } from '../contexts/AuthContext';
import { supabaseService } from '../services/supabaseService';

interface Reminder {
  id: string;
  title: string;
  message?: string;
  scheduled_time: string;
  repeat_pattern?: string;
  is_active: boolean;
}

const RemindersScreen = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form state
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('09:00');
  const [repeatPattern, setRepeatPattern] = useState<string>('');

  useEffect(() => {
    if (user) {
      loadReminders();
    }
  }, [user]);

  const loadReminders = async () => {
    if (!user) return;
    
    try {
      setIsLoading(true);
      const data = await supabaseService.getReminders(user.uid);
      setReminders(data);
    } catch (error) {
      console.error('Error loading reminders:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateReminder = async () => {
    if (!user || !title || !scheduledDate) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      // Validate date format
      const dateTime = new Date(`${scheduledDate}T${scheduledTime}`);
      if (isNaN(dateTime.getTime())) {
        alert('Invalid date format. Please use YYYY-MM-DD');
        return;
      }

      // Check if date is in the past
      if (dateTime < new Date()) {
        alert('Scheduled time must be in the future');
        return;
      }
      
      await supabaseService.createReminder(
        user.uid,
        title,
        dateTime,
        undefined,
        message || undefined,
        repeatPattern || undefined
      );

      setShowModal(false);
      resetForm();
      await loadReminders();
    } catch (error) {
      console.error('Error creating reminder:', error);
      alert('Failed to create reminder. Please try again.');
    }
  };

  const handleToggleReminder = async (reminderId: string, isActive: boolean) => {
    if (!user) return;

    try {
      await supabaseService.toggleReminder(user.uid, reminderId, !isActive);
      loadReminders();
    } catch (error) {
      console.error('Error toggling reminder:', error);
    }
  };

  const handleDeleteReminder = async (reminderId: string) => {
    if (!user) return;

    try {
      await supabaseService.deleteReminder(user.uid, reminderId);
      loadReminders();
    } catch (error) {
      console.error('Error deleting reminder:', error);
    }
  };

  const resetForm = () => {
    setTitle('');
    setMessage('');
    setScheduledDate('');
    setScheduledTime('09:00');
    setRepeatPattern('');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <Card variant="gradient" style={styles.headerCard}>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Practice Reminders</Text>
              <Text style={styles.subtitle}>
                Stay consistent with your acupressure practice
              </Text>
            </View>
            <TouchableOpacity onPress={() => setShowModal(true)} style={styles.addButton}>
              <Ionicons name="add-circle" size={32} color={Colors.primary[600]} />
            </TouchableOpacity>
          </View>
        </Card>

        {/* Reminders List */}
        {reminders.length > 0 ? (
          reminders.map((reminder) => (
            <Card key={reminder.id} variant="glass" style={styles.reminderCard}>
              <View style={styles.reminderHeader}>
                <View style={styles.reminderInfo}>
                  <Text style={styles.reminderTitle}>{reminder.title}</Text>
                  <Text style={styles.reminderTime}>
                    <Ionicons name="time-outline" size={14} color={Colors.text.secondary} />{' '}
                    {formatDate(reminder.scheduled_time)}
                  </Text>
                  {reminder.repeat_pattern && (
                    <Text style={styles.reminderRepeat}>
                      <Ionicons name="repeat-outline" size={14} color={Colors.primary[600]} />{' '}
                      {reminder.repeat_pattern}
                    </Text>
                  )}
                </View>
                <View style={styles.reminderActions}>
                  <TouchableOpacity
                    onPress={() => handleToggleReminder(reminder.id, reminder.is_active)}
                    style={styles.actionButton}
                  >
                    <Ionicons
                      name={reminder.is_active ? 'notifications' : 'notifications-off'}
                      size={24}
                      color={reminder.is_active ? Colors.primary[600] : Colors.text.secondary}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleDeleteReminder(reminder.id)}
                    style={styles.actionButton}
                  >
                    <Ionicons name="trash-outline" size={24} color={Colors.error} />
                  </TouchableOpacity>
                </View>
              </View>
              {reminder.message && (
                <Text style={styles.reminderMessage}>{reminder.message}</Text>
              )}
            </Card>
          ))
        ) : (
          <Card variant="glass" style={styles.emptyCard}>
            <Ionicons name="notifications-off-outline" size={64} color={Colors.text.tertiary} />
            <Text style={styles.emptyText}>No reminders yet</Text>
            <Text style={styles.emptySubtext}>
              Create a reminder to help you stay consistent with your practice
            </Text>
          </Card>
        )}
      </ScrollView>

      {/* Create Reminder Modal */}
      <Modal visible={showModal} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Create Reminder</Text>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Ionicons name="close" size={28} color={Colors.text.primary} />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.modalBody}>
              <Text style={styles.label}>Title *</Text>
              <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Practice acupressure"
                placeholderTextColor={Colors.text.tertiary}
              />

              <Text style={styles.label}>Message</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={message}
                onChangeText={setMessage}
                placeholder="Optional reminder message"
                placeholderTextColor={Colors.text.tertiary}
                multiline
                numberOfLines={3}
              />

              <Text style={styles.label}>Date *</Text>
              <TextInput
                style={styles.input}
                value={scheduledDate}
                onChangeText={setScheduledDate}
                placeholder="YYYY-MM-DD (e.g., 2025-11-24)"
                placeholderTextColor={Colors.text.tertiary}
              />

              <Text style={styles.label}>Time *</Text>
              <TextInput
                style={styles.input}
                value={scheduledTime}
                onChangeText={setScheduledTime}
                placeholder="HH:MM (e.g., 09:00)"
                placeholderTextColor={Colors.text.tertiary}
              />

              <Text style={styles.label}>Repeat</Text>
              <View style={styles.repeatOptions}>
                {['', 'daily', 'weekly', 'monthly'].map((pattern) => (
                  <TouchableOpacity
                    key={pattern}
                    style={[
                      styles.repeatButton,
                      repeatPattern === pattern && styles.repeatButtonActive,
                    ]}
                    onPress={() => setRepeatPattern(pattern)}
                  >
                    <Text
                      style={[
                        styles.repeatButtonText,
                        repeatPattern === pattern && styles.repeatButtonTextActive,
                      ]}
                    >
                      {pattern || 'Once'}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            <View style={styles.modalFooter}>
              <Button
                title="Create Reminder"
                onPress={handleCreateReminder}
                variant="primary"
                size="lg"
                fullWidth
                disabled={!title || !scheduledDate}
              />
            </View>
          </View>
        </View>
      </Modal>
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
  headerCard: {
    marginBottom: Spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    ...Typography.h3,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  subtitle: {
    ...Typography.body2,
    color: Colors.text.secondary,
  },
  addButton: {
    padding: Spacing.sm,
  },
  reminderCard: {
    marginBottom: Spacing.md,
  },
  reminderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  reminderInfo: {
    flex: 1,
  },
  reminderTitle: {
    ...Typography.h5,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  reminderTime: {
    ...Typography.body2,
    color: Colors.text.secondary,
    marginBottom: Spacing.xs,
  },
  reminderRepeat: {
    ...Typography.caption,
    color: Colors.primary[600],
    fontWeight: '600',
  },
  reminderMessage: {
    ...Typography.body2,
    color: Colors.text.secondary,
    marginTop: Spacing.sm,
  },
  reminderActions: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  actionButton: {
    padding: Spacing.xs,
  },
  emptyCard: {
    alignItems: 'center',
    padding: Spacing.xl,
  },
  emptyText: {
    ...Typography.h5,
    color: Colors.text.secondary,
    marginTop: Spacing.md,
    textAlign: 'center',
  },
  emptySubtext: {
    ...Typography.body2,
    color: Colors.text.tertiary,
    marginTop: Spacing.sm,
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: Colors.background.primary,
    borderTopLeftRadius: BorderRadius.xl,
    borderTopRightRadius: BorderRadius.xl,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.light,
  },
  modalTitle: {
    ...Typography.h4,
    color: Colors.text.primary,
  },
  modalBody: {
    padding: Spacing.lg,
  },
  label: {
    ...Typography.body1,
    color: Colors.text.primary,
    fontWeight: '600',
    marginBottom: Spacing.sm,
    marginTop: Spacing.md,
  },
  input: {
    ...Typography.body1,
    backgroundColor: Colors.background.secondary,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border.light,
    color: Colors.text.primary,
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  repeatOptions: {
    flexDirection: 'row',
    gap: Spacing.sm,
    flexWrap: 'wrap',
  },
  repeatButton: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border.light,
    backgroundColor: Colors.background.secondary,
  },
  repeatButtonActive: {
    backgroundColor: Colors.primary[100],
    borderColor: Colors.primary[600],
  },
  repeatButtonText: {
    ...Typography.body2,
    color: Colors.text.secondary,
    textTransform: 'capitalize',
  },
  repeatButtonTextActive: {
    color: Colors.primary[600],
    fontWeight: '600',
  },
  modalFooter: {
    padding: Spacing.lg,
    borderTopWidth: 1,
    borderTopColor: Colors.border.light,
  },
});

export default RemindersScreen;
