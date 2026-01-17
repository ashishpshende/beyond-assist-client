import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Layout from '../components/Layout';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setUser, logout } from '../redux/userSlice';

interface GenericScreenProps {
    pageName: string;
    isPublic?: boolean;
}

const GenericScreen: React.FC<GenericScreenProps> = ({ pageName, isPublic }) => {
    const navigation = useNavigation<any>();
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(setUser({ name: 'User', isAuthenticated: true }));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Layout title={pageName}>
            <View style={styles.container}>
                <Text style={styles.text}>This is {pageName} Page for User</Text>

                {isPublic && pageName === 'Login' && (
                    <Button title="Login" onPress={handleLogin} />
                )}

                {isPublic && pageName !== 'Login' && (
                    <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
                )}

                {/* Navigation Links for Public pages demo */}
                {isPublic && (
                    <View style={{ marginTop: 20 }}>
                        <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
                        <Button title="Go to Forgot Password" onPress={() => navigation.navigate('ForgotPassword')} />
                        <Button title="Go to Reset Password" onPress={() => navigation.navigate('ResetPassword')} />
                    </View>
                )}

                {!isPublic && (
                    <View style={{ marginTop: 20 }}>
                        <Text>Private Content Here</Text>
                    </View>
                )}
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: '#333',
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: 10,
        borderRadius: 5
    },
});

export default GenericScreen;
