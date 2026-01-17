import React from 'react';
import { useTranslation } from 'react-i18next';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
    DashboardTabs, ScheduleTabs, FinanceTabs, GoalsTabs
} from './TabNavigators';
import {
    TimeManagementScreen, TasksScreen, SettingsScreen, UserProfileScreen
} from '../screens/private';
import { logout } from '../redux/userSlice';
import { RootState } from '../redux/store';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { name, email, bio } = useSelector((state: RootState) => state.user);
    const { colors, mode } = useTheme();

    return (
        <DrawerContentScrollView {...props}>
            <TouchableOpacity style={[styles.profileContainer, { backgroundColor: colors.card, borderBottomColor: colors.border, borderBottomWidth: 1 }]} onPress={() => props.navigation.navigate('UserProfile')}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/150' }}
                    style={styles.profileImage}
                />
                <Text style={[styles.profileName, { color: colors.text }]}>{name}</Text>
                <Text style={[styles.profileEmail, { color: colors.secondaryText }]}>{email}</Text>
                <Text style={[styles.profileBio, { color: colors.secondaryText }]}>{bio}</Text>
            </TouchableOpacity>

            <DrawerItemList {...props} />

            <View style={{ height: 1, backgroundColor: colors.border, marginVertical: 10 }} />

            <DrawerItem
                label={mode === 'light' ? t('darkMode') : t('lightMode')}
                onPress={() => dispatch(toggleTheme())}
                icon={({ color, size }) => <Ionicons name={mode === 'light' ? 'moon' : 'sunny'} size={size} color={color} />}
                labelStyle={{ color: colors.text }}
            />

            <DrawerItem
                label={t('logout')}
                onPress={() => dispatch(logout())}
                icon={({ color, size }) => <Ionicons name="log-out-outline" size={size} color={color} />}
                labelStyle={{ color: colors.text }} // Ensure logout label also uses theme text color
            />
        </DrawerContentScrollView>
    );
};

import { useTheme } from '../styles/theme';
import { toggleTheme } from '../redux/themeSlice';

export const AppNavigator = () => {
    const { t } = useTranslation();
    const { colors } = useTheme();
    // Dispatch and mode not needed here anymore

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerStyle: { backgroundColor: colors.primary },
                headerTintColor: colors.text === '#ffffff' ? '#000' : '#fff', // Use contrasting text color
                // Actually, if primary is blue, white text is usually good.
                // Let's stick to white text on primary or ensure primary has contrast.
                // In both light and dark theme, primary is blue-ish, so white text is checking out.
                headerTitleStyle: { color: '#fff' }, // Force header title to be white
                drawerActiveTintColor: colors.primary,
                drawerInactiveTintColor: colors.secondaryText,
                drawerStyle: {
                    backgroundColor: colors.background,
                },
            }}
        >
            <Drawer.Screen
                name="DashboardRoot"
                component={DashboardTabs}
                options={{
                    title: t('dashboard'),
                    drawerIcon: ({ color, size }) => <Ionicons name="grid" size={size} color={color} />
                }}
            />
            <Drawer.Screen
                name="ScheduleRoot"
                component={ScheduleTabs}
                options={{
                    title: t('schedule'),
                    drawerIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} />
                }}
            />
            <Drawer.Screen
                name="FinanceRoot"
                component={FinanceTabs}
                options={{
                    title: t('finance'),
                    drawerIcon: ({ color, size }) => <Ionicons name="cash" size={size} color={color} />
                }}
            />
            <Drawer.Screen
                name="GoalsRoot"
                component={GoalsTabs}
                options={{
                    title: t('goals'),
                    drawerIcon: ({ color, size }) => <Ionicons name="trophy" size={size} color={color} />
                }}
            />
            <Drawer.Screen
                name="TimeManagement"
                component={TimeManagementScreen}
                options={{
                    title: t('timeManagement'),
                    drawerIcon: ({ color, size }) => <Ionicons name="stopwatch" size={size} color={color} />
                }}
            />
            <Drawer.Screen
                name="Tasks"
                component={TasksScreen}
                options={{
                    title: t('tasks'),
                    drawerIcon: ({ color, size }) => <Ionicons name="checkmark-done" size={size} color={color} />
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    title: t('settings'),
                    drawerIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />
                }}
            />
            <Drawer.Screen
                name="UserProfile"
                component={UserProfileScreen}
                options={{
                    title: t('userProfile'),
                    drawerItemStyle: { display: 'none' } // Hide from drawer list
                }}
            />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        padding: 20,
        marginBottom: 10,
        alignItems: 'center'
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    profileEmail: {
        fontSize: 14,
        color: '#666',
    },
    profileBio: {
        fontSize: 12,
        fontStyle: 'italic',
        marginTop: 5
    }
});
