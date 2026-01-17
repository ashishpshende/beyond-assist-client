import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Layout from '../../../components/Layout';
import { useTheme } from '../../../styles/theme';

const UserProfileScreen = () => {
    const { t } = useTranslation();
    const { name, email, bio } = useSelector((state: RootState) => state.user);
    const { colors } = useTheme();

    return (
        <Layout title={t('userProfile')}>
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                <Text style={[styles.label, { color: colors.secondaryText }]}>{t('nameLabel')}</Text>
                <Text style={[styles.value, { color: colors.text }]}>{name}</Text>

                <Text style={[styles.label, { color: colors.secondaryText }]}>{t('emailLabel')}</Text>
                <Text style={[styles.value, { color: colors.text }]}>{email}</Text>

                <Text style={[styles.label, { color: colors.secondaryText }]}>{t('bioLabel')}</Text>
                <Text style={[styles.value, { color: colors.text }]}>{bio || t('noBioAvailable')}</Text>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    value: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default UserProfileScreen;
