import React from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, selectThemeMode } from '../../redux/themeSlice';
import { useTheme } from '../../styles/theme';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const SettingsScreen: React.FC = () => {
    const dispatch = useDispatch();
    const currentMode = useSelector(selectThemeMode);
    const { colors } = useTheme();
    const { t, i18n } = useTranslation();

    const isDarkMode = currentMode === 'dark';

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const renderLanguageOption = (langCode: string, label: string) => {
        const isSelected = i18n.language === langCode;
        return (
            <TouchableOpacity onPress={() => changeLanguage(langCode)} style={[styles.row, { borderBottomColor: colors.border }]}>
                <View style={styles.rowLeft}>
                    <Text style={[styles.rowLabel, { color: colors.text, marginLeft: 50 }]}>{label}</Text>
                </View>
                {isSelected && <Ionicons name="checkmark" size={22} color={colors.primary} />}
            </TouchableOpacity>
        );
    };

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={[styles.header, { borderBottomColor: colors.border }]}>
                <Text style={[styles.title, { color: colors.text }]}>{t('settings')}</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={[styles.section, { backgroundColor: colors.card, borderColor: colors.border }]}>
                    <Text style={[styles.sectionTitle, { color: colors.secondaryText }]}>Appearance</Text>

                    <View style={[styles.row, { borderBottomColor: colors.border }]}>
                        <View style={styles.rowLeft}>
                            <View style={[styles.iconContainer, { backgroundColor: isDarkMode ? '#333' : '#eee' }]}>
                                <Ionicons name={isDarkMode ? "moon" : "sunny"} size={22} color={colors.primary} />
                            </View>
                            <Text style={[styles.rowLabel, { color: colors.text }]}>Dark Mode</Text>
                        </View>
                        <Switch
                            value={isDarkMode}
                            onValueChange={handleToggleTheme}
                            trackColor={{ false: '#767577', true: colors.primary }}
                            thumbColor={'#f4f3f4'}
                        />
                    </View>
                </View>

                {/* Language Section */}
                <View style={[styles.section, { backgroundColor: colors.card, borderColor: colors.border }]}>
                    <Text style={[styles.sectionTitle, { color: colors.secondaryText }]}>{t('language')}</Text>

                    <View style={[styles.row, { borderBottomColor: colors.border }]}>
                        <View style={styles.rowLeft}>
                            <View style={[styles.iconContainer, { backgroundColor: isDarkMode ? '#333' : '#eee' }]}>
                                <Ionicons name="globe" size={22} color={colors.primary} />
                            </View>
                            <Text style={[styles.rowLabel, { color: colors.text }]}>{t('selectLanguage')}</Text>
                        </View>
                    </View>

                    {renderLanguageOption('en', 'English')}
                    {renderLanguageOption('hi', 'हिंदी')}
                    {renderLanguageOption('mr', 'मराठी')}

                </View>

                {/* Placeholder for other settings */}
                <View style={[styles.section, { backgroundColor: colors.card, borderColor: colors.border }]}>
                    <Text style={[styles.sectionTitle, { color: colors.secondaryText }]}>About</Text>
                    <View style={[styles.row, { borderBottomColor: 'transparent' }]}>
                        <View style={styles.rowLeft}>
                            <View style={[styles.iconContainer, { backgroundColor: isDarkMode ? '#333' : '#eee' }]}>
                                <Ionicons name="information-circle" size={22} color={colors.primary} />
                            </View>
                            <Text style={[styles.rowLabel, { color: colors.text }]}>Version</Text>
                        </View>
                        <Text style={{ color: colors.secondaryText }}>1.0.0</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 20,
        paddingTop: 60, // Safe area for status bar
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    content: {
        padding: 20,
    },
    section: {
        marginBottom: 20,
        borderRadius: 12,
        borderWidth: 1,
        overflow: 'hidden',
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 1,
        padding: 15,
        paddingBottom: 5,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 0.5,
    },
    rowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    iconContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowLabel: {
        fontSize: 16,
        fontWeight: '500',
    },
});

export default SettingsScreen;
