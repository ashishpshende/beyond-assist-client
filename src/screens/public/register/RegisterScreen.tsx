import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthLayout from '../../../components/AuthLayout';
import { useTheme } from '../../../styles/theme';

interface RegisterScreenProps {
    pageName?: string;
    isPublic?: boolean;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ pageName = "Register" }) => {
    const { t } = useTranslation();
    const navigation = useNavigation<any>();
    const { colors } = useTheme();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (!name || !email || !password || !confirmPassword) {
            Alert.alert(t('error'), t('fillAllFields'));
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert(t('error'), t('passwordsDoNotMatch'));
            return;
        }
        // TODO: Implement registration logic
        Alert.alert(t('success'), t('registerSuccess'));
        navigation.navigate('Login');
    };

    return (
        <AuthLayout
            title={t('joinUs')}
            subtitle={t('createAccount')}
            description={t('registerDescription')}
        >
            <Text style={[styles.loginTitle, { color: colors.primary }]}>{t('createAccountHeader')}</Text>
            <Text style={[styles.loginSubtitle, { color: colors.secondaryText }]}>
                {t('registerSubtitle')}
            </Text>

            <View style={styles.inputContainer}>
                <View style={[styles.inputWrapper, { backgroundColor: colors.inputBackground }]}>
                    <View style={[styles.activeIndicator, { backgroundColor: colors.primary }]} />
                    <TextInput
                        style={[styles.input, { color: colors.text }]}
                        placeholder={t('fullNamePlaceholder')}
                        placeholderTextColor={colors.placeholder}
                        value={name}
                        onChangeText={setName}
                    />
                </View>

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

                <View style={[styles.inputWrapper, { backgroundColor: colors.inputBackground }]}>
                    <View style={[styles.activeIndicator, { backgroundColor: colors.primary }]} />
                    <TextInput
                        style={[styles.input, { color: colors.text }]}
                        placeholder={t('confirmPasswordPlaceholder')}
                        placeholderTextColor={colors.placeholder}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                    />
                </View>
            </View>

            <TouchableOpacity style={[styles.loginButton, { backgroundColor: colors.primary, shadowColor: colors.primary }]} onPress={handleRegister}>
                <Text style={styles.loginButtonText}>{t('registerButton')}</Text>
            </TouchableOpacity>

            <View style={styles.registerContainer}>
                <Text style={[styles.registerText, { color: colors.secondaryText }]}>{t('alreadyHaveAccount')}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.registerLink, { color: colors.primary }]}>{t('login')}</Text>
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

export default RegisterScreen;
