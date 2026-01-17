import React from 'react';
import { View, Text, StyleSheet, ImageBackground, useWindowDimensions, Platform, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { useTheme } from '../styles/theme';
import { toggleTheme } from '../redux/themeSlice';
import { useTranslation } from 'react-i18next';

interface AuthLayoutProps {
    children: React.ReactNode;
    subtitle: string;
    title: string;
    description: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, subtitle, title, description }) => {
    const { width } = useWindowDimensions();
    const isWeb = width > 768;
    const { colors, mode } = useTheme();
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <View style={[styles.mainContainer, { backgroundColor: colors.background }]}>
            <TouchableOpacity
                style={[styles.themeToggle, { backgroundColor: colors.card }]}
                onPress={() => dispatch(toggleTheme())}
            >
                <Ionicons
                    name={mode === 'light' ? 'moon' : 'sunny'}
                    size={24}
                    color={colors.text}
                />
            </TouchableOpacity>

            <View style={[styles.container, isWeb ? styles.rowLayout : styles.columnLayout]}>

                {/* Left Side (Branding) */}
                <View style={[styles.brandingSection, isWeb ? styles.brandingWeb : styles.brandingMobile, { backgroundColor: colors.brandBackground }]}>
                    {/* <ImageBackground
                        source={require('../../assets/login-bg.png')}
                        style={styles.backgroundImage}
                        resizeMode="cover"
                    > */}
                    <View style={[styles.brandingContent, { backgroundColor: colors.brandBackground + 'D9' }]}>
                        {/* D9 is approx 85% opacity hex */}
                        <View style={styles.companyHeader}>
                            <Ionicons name="infinite" size={24} color="#fff" />
                            <Text style={styles.companyName}>COMPANY NAME</Text>
                        </View>

                        <View style={styles.brandingTextContainer}>
                            <Text style={styles.welcomeSubtext}>{subtitle}</Text>
                            <Text style={styles.welcomeTitle}>{title}</Text>
                            <View style={styles.underline} />
                            <Text style={styles.loremText}>
                                {description}
                            </Text>
                        </View>
                    </View>
                    {/* </ImageBackground> */}
                </View>

                {/* Right Side (Form) */}
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={[styles.formSection, isWeb ? styles.formWeb : styles.formMobile, { backgroundColor: colors.background }]}
                >
                    <ScrollView contentContainerStyle={styles.formContent} showsVerticalScrollIndicator={false}>
                        {children}

                        {/* Language Selector Footer */}
                        <View style={styles.languageFooter}>
                            <TouchableOpacity onPress={() => changeLanguage('en')}>
                                <Text style={[styles.langText, i18n.language === 'en' && styles.activeLang, { color: colors.secondaryText }]}>English</Text>
                            </TouchableOpacity>
                            <Text style={[styles.langSeparator, { color: colors.border }]}>|</Text>
                            <TouchableOpacity onPress={() => changeLanguage('hi')}>
                                <Text style={[styles.langText, i18n.language === 'hi' && styles.activeLang, { color: colors.secondaryText }]}>हिंदी</Text>
                            </TouchableOpacity>
                            <Text style={[styles.langSeparator, { color: colors.border }]}>|</Text>
                            <TouchableOpacity onPress={() => changeLanguage('mr')}>
                                <Text style={[styles.langText, i18n.language === 'mr' && styles.activeLang, { color: colors.secondaryText }]}>मराठी</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        position: 'relative',
    },
    themeToggle: {
        position: 'absolute',
        top: 50,
        right: 20,
        zIndex: 100,
        padding: 10,
        borderRadius: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    container: {
        flex: 1,
    },
    rowLayout: {
        flexDirection: 'row',
    },
    columnLayout: {
        flexDirection: 'column',
    },

    // Branding Section
    brandingSection: {
        // backgroundColor set dynamically
    },
    brandingWeb: {
        width: '50%',
        height: '100%',
    },
    brandingMobile: {
        width: '100%',
        height: 250,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
    },
    brandingContent: {
        padding: 40,
        flex: 1,
        justifyContent: 'space-between',
        // backgroundColor set dynamically
    },
    companyHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    companyName: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 1,
    },
    brandingTextContainer: {
        marginBottom: 60,
    },
    welcomeSubtext: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        opacity: 0.9,
    },
    welcomeTitle: {
        color: '#fff',
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 20,
        textTransform: 'uppercase',
    },
    underline: {
        width: 60,
        height: 4,
        backgroundColor: '#fff',
        marginBottom: 30,
        borderRadius: 2,
    },
    loremText: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 22,
        opacity: 0.8,
        maxWidth: 400,
    },

    // Form Section
    formSection: {
        flex: 1,
        justifyContent: 'center',
    },
    formWeb: {
        width: '50%',
    },
    formMobile: {
        width: '100%',
        marginTop: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: 'hidden',
    },
    formContent: {
        padding: 40,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    languageFooter: {
        flexDirection: 'row',
        marginTop: 40,
        alignItems: 'center',
        gap: 10,
    },
    langText: {
        fontSize: 14,
    },
    activeLang: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    langSeparator: {
        fontSize: 14,
    }
});

export default AuthLayout;
