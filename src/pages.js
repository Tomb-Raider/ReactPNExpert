export const PAGES = {
    account: {
        icon: 'account_circle',
        title: 'Аккаунт',
    },
    news: {
        icon: 'dashboard',
        title: 'Новости',
    },
    activities: {
        icon: 'date_range',
        title: 'Активности',
        action: {
            videos: {
                icon: 'dashboard',
                title: 'Видео',
            },
            surveys: {
                icon: 'dashboard',
                title: 'Опросы',
            },
            diary: {
                icon: 'dashboard',
                title: 'Дневник',
            },
            games: {
                icon: 'dashboard',
                title: 'Игры',
            },
            map: {
                icon: 'dashboard',
                title: 'Карта',
            },
            goals: {
                icon: 'dashboard',
                title: 'Цели',
            },
        }
    },
    users: {
        icon: 'supervisor_account',
        title: 'Пользователи',
    },
    about: {
        icon: 'favorite_border',
        title: 'О нас',
    },
    settings: {
        icon: 'settings',
        title: 'Настройки',
    },
}

function collectCollapsableHeaders(declaration, collector, prefix = '') {
    for (let key in declaration) {
        if (typeof declaration[key].action == 'object') {
            collector.push(prefix + '/' + key)
            collectCollapsableHeaders(declaration[key], collector, prefix + '/' + key)
        }
    }
}

export function getCollapsableHeaders() {
    const collapsable_headers = []
    collectCollapsableHeaders(PAGES, collapsable_headers)
    return collapsable_headers
}
