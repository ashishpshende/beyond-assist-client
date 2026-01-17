import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AuthLayout from '../../../components/AuthLayout';
import { useTheme } from '../../../styles/theme';

interface ForgotPasswordScreenProps {
    pageName?: string;
    isPublic?: boolean;
}

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ pageName = "Forgot Password" }) => {
    const { t } = useTranslation();
    const navigation = useNavigation<any>();
    const { colors } = useTheme();

    const [email, setEmail] = useState('');

    const handleSendResetLink = () => {
        if (!email) {
            Alert.alert(t('error'), t('enterEmail'));
            return;
        }
        // TODO: Implement password reset logic
        Alert.alert(t('success'), t('resetLinkSent'));
        navigation.navigate('Login');
    };

    return (
        <AuthLayout
            title={t('passwordRecovery')}
            subtitle={t('dontWorry')}
            description={t('forgotPasswordDescription')}
        >
            <Text style={[styles.loginTitle, { color: colors.primary }]}>{t('forgotPassword')}</Text>
            <Text style={[styles.loginSubtitle, { color: colors.secondaryText }]}>
                {t('forgotPasswordSubtitle')}
            </Text>

            <View style={styles.inputContainer}>
                <View style={[styles.inputWrapper, { backgroundColor: colors.inputBackground }]}>
                    <View style={[styles.activeIndicator, { backgroundColor: colors.primary }]} />
                    <TextInput
                        style={[styles.input, { color: colors.text }]}
                        placeholder={t('emailPlaceholder')}
                        placeholderTextColor={colors.placeholder}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
            </View>

            <TouchableOpacity style={[styles.loginButton, { backgroundColor: colors.primary, shadowColor: colors.primary }]} onPress={handleSendResetLink}>
                <Text style={styles.loginButtonText}>{t('sendResetLink')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate('Login')}
            >
                <Ionicons name="arrow-back" size={20} color={colors.secondaryText} />
                <Text style={[styles.backButtonText, { color: colors.secondaryText }]}>{t('backToLogin')}</Text>
            </TouchableOpacity>
        </AuthLayout>
    );
};

const styles = StyleSheet.create({
    loginTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    loginSubtitle: {
        fontSize: 14,
        textAlign: 'center',
        maxWidth: 400,
        marginBottom: 50,
        lineHeight: 20,
    },
    inputContainer: {
        width: '100%',
        maxWidth: 400,
        marginBottom: 20,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 4,
        height: 55,
        overflow: 'hidden',
    },
    activeIndicator: {
        width: 4,
        height: '60%',
        borderTopRightRadius: 2,
        borderBottomRightRadius: 2,
    },
    input: {
        flex: 1,
        paddingHorizontal: 20,
        fontSize: 16,
        height: '100%',
    },
    loginButton: {
        width: '100%',
        maxWidth: 400,
        height: 55,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    backButton: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    backButtonText: {
        fontSize: 14,
        fontWeight: '600'
    }
});

export default ForgotPasswordScreen;
