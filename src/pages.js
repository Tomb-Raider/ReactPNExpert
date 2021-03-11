export const PAGES = {
    main: {
        icon: 'date_range',
        title: 'Главная',
    },
    goals: {
        icon: 'task_alt',
        title: 'Задачи',
    },
    account: {
        icon: 'account_circle',
        title: 'Аккаунт',
    },
    activities: {
        icon: 'dashboard',
        title: 'Активности',
        action: {
            videos: {
                icon: 'video_camera_front',
                title: 'Видео',
            },
            surveys: {
                icon: 'question_answer',
                title: 'Опросы',
                action: {
                    statistics: {
                        icon: 'supervisor_account',
                        title: 'Человеки',
                    },
                    best: {
                        icon: 'favorite_border',
                        'title': 'Любимое',
                    }
                }
            },
            diary: {
                icon: 'book',
                title: 'Дневник',
            },
            games: {
                icon: 'games',
                title: 'Игры',
            },
            map: {
                icon: 'map',
                title: 'Карта',
            },
        }
    },
    statistics: {
        icon: 'query_stats',
        title: 'Статистика',
    },
    files: {
        icon: 'drive_file_move',
        title: 'Файлы',
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
