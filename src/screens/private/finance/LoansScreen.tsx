import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from '../../../components/Layout';
import { useTheme } from '../../../styles/theme';

const LoansScreen = () => {
    const { colors } = useTheme();

    return (
        <Layout title="Loans">
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                <Text style={[styles.text, { color: colors.text }]}>Loans and Debts</Text>
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
        fontSize: 18,
    },
});

export default LoansScreen;
