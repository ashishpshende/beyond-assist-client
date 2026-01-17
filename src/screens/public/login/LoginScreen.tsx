import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/userSlice';
import { Ionicons } from '@expo/vector-icons';
import AuthLayout from '../../../components/AuthLayout';
import { useTheme } from '../../../styles/theme';

interface LoginScreenProps {
    pageName: string;
    isPublic?: boolean;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ pageName }) => {
    const { t } = useTranslation();
    const navigation = useNavigation<any>();
    const dispatch = useDispatch();
    const { colors } = useTheme();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keepSignedIn, setKeepSignedIn] = useState(false);

    const handleLogin = () => {
        // Simulate login
        console.log('Logging in with:', email, password);
        dispatch(setUser({ name: 'User', email: email || 'user@example.com', isAuthenticated: true }));
    };

    return (
        <AuthLayout
            title={t('welcomeBack')}
            subtitle={t('niceToSeeYou')}
            description={t('loginDescription')}
        >
            <Text style={[styles.loginTitle, { color: colors.primary }]}>{t('loginTitle')}</Text>
            <Text style={[styles.loginSubtitle, { color: colors.secondaryText }]}>
                {t('loginSubtitle')}
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

                <View style={[styles.inputWrapper, { backgroundColor: colors.inputBackground }]}>
                    <View style={[styles.activeIndicator, { backgroundColor: colors.primary }]} />
                    <TextInput
                        style={[styles.input, { color: colors.text }]}
                        placeholder={t('passwordPlaceholder')}
                        placeholderTextColor={colors.placeholder}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
            </View>

            <View style={styles.actionsRow}>
                <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() => setKeepSignedIn(!keepSignedIn)}
                >
                    <Ionicons
                        name={keepSignedIn ? "checkbox" : "square-outline"}
                        size={20}
                        color={colors.primary}
                    />
                    <Text style={[styles.checkboxLabel, { color: colors.secondaryText }]}>{t('keepMeSignedIn')}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={[styles.forgotPasswordText, { color: colors.primary }]}>{t('forgotPassword')}</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={[styles.loginButton, { backgroundColor: colors.primary, shadowColor: colors.primary }]} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>{t('loginButton')}</Text>
            </TouchableOpacity>

            <View style={styles.registerContainer}>
                <Text style={[styles.registerText, { color: colors.secondaryText }]}>{t('dontHaveAccount')}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={[styles.registerLink, { color: colors.primary }]}>{t('register')}</Text>
                </TouchableOpacity>
            </View>
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
    actionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 400,
        marginBottom: 40,
        alignItems: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    checkboxLabel: {
        fontSize: 14,
    },
    forgotPasswordText: {
        fontSize: 14,
        fontWeight: '600',
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
    registerContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    registerText: {
        fontSize: 14,
    },
    registerLink: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
