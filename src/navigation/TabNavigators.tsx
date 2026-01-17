import React from 'react';
import { useTranslation } from 'react-i18next';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    CalendarScreen, FinanceDashboardScreen, GoalsDashboardScreen,
    ScheduleTabScreen, TasksTabScreen, EventsScreen,
    BudgetScreen, ExpensesScreen, LoansScreen, InvestmentScreen,
    ShortTermGoalScreen, LongTermGoalScreen
} from '../screens/private';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../styles/theme';

const Tab = createBottomTabNavigator();

// Dashboard Tabs
export const DashboardTabs = () => {
    const { t } = useTranslation();
    const { colors } = useTheme();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.border },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.secondaryText,
            }}
        >
            <Tab.Screen name="Calendar" component={CalendarScreen} options={{ title: t('calendar'), tabBarIcon: ({ color }) => <Ionicons name="calendar" size={20} color={color} /> }} />
            <Tab.Screen name="Finance" component={FinanceDashboardScreen} options={{ title: t('finance'), tabBarIcon: ({ color }) => <Ionicons name="cash" size={20} color={color} /> }} />
            <Tab.Screen name="Goals" component={GoalsDashboardScreen} options={{ title: t('goals'), tabBarIcon: ({ color }) => <Ionicons name="trophy" size={20} color={color} /> }} />
        </Tab.Navigator>
    );
};

// Schedule Tabs
export const ScheduleTabs = () => {
    const { t } = useTranslation();
    const { colors } = useTheme();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.border },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.secondaryText,
            }}
        >
            <Tab.Screen name="Schedule" component={ScheduleTabScreen} options={{ title: t('schedule'), tabBarIcon: ({ color }) => <Ionicons name="time" size={20} color={color} /> }} />
            <Tab.Screen name="Tasks" component={TasksTabScreen} options={{ title: t('tasks'), tabBarIcon: ({ color }) => <Ionicons name="list" size={20} color={color} /> }} />
            <Tab.Screen name="Events" component={EventsScreen} options={{ title: t('events'), tabBarIcon: ({ color }) => <Ionicons name="calendar-outline" size={20} color={color} /> }} />
        </Tab.Navigator>
    );
};

// Finance Tabs
export const FinanceTabs = () => {
    const { t } = useTranslation();
    const { colors } = useTheme();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.border },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.secondaryText,
            }}
        >
            <Tab.Screen name="Budget" component={BudgetScreen} options={{ title: t('budget'), tabBarIcon: ({ color }) => <Ionicons name="pie-chart" size={20} color={color} /> }} />
            <Tab.Screen name="Expenses" component={ExpensesScreen} options={{ title: t('expenses'), tabBarIcon: ({ color }) => <Ionicons name="wallet" size={20} color={color} /> }} />
            <Tab.Screen name="Loans" component={LoansScreen} options={{ title: t('loans'), tabBarIcon: ({ color }) => <Ionicons name="card" size={20} color={color} /> }} />
            <Tab.Screen name="Investment" component={InvestmentScreen} options={{ title: t('investment'), tabBarIcon: ({ color }) => <Ionicons name="trending-up" size={20} color={color} /> }} />
        </Tab.Navigator>
    );
};

// Goals Tabs
export const GoalsTabs = () => {
    const { t } = useTranslation();
    const { colors } = useTheme();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.border },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.secondaryText,
            }}
        >
            <Tab.Screen name="ShortTerm" component={ShortTermGoalScreen} options={{ title: t('shortTerm'), tabBarIcon: ({ color }) => <Ionicons name="hourglass" size={20} color={color} /> }} />
            <Tab.Screen name="LongTerm" component={LongTermGoalScreen} options={{ title: t('longTerm'), tabBarIcon: ({ color }) => <Ionicons name="infinite" size={20} color={color} /> }} />
        </Tab.Navigator>
    );
};
