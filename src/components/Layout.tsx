import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useTheme } from '../styles/theme';

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    showUserInfo?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
    const { name } = useSelector((state: RootState) => state.user);
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <SafeAreaView style={styles.safeArea}>
                <View style={[styles.header, { backgroundColor: colors.brandBackground, borderBottomColor: colors.border }]}>
                    <Text style={[styles.title, { color: '#ffffff' }]}>
                        {title ? `${title} for User ${name}` : `Welcome ${name}`}
                    </Text>
                </View>
                <View style={styles.content}>
                    {children}
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    header: {
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    content: {
        flex: 1,
        padding: 10,
    },
});

export default Layout;
