/**
 * exports for variable styles
 */

interface font {
  SIZE: string;
  LINE_HEIGHT: string;
}

interface UiValues {
  TOOLBAR_HEIGHT: string;
  TOOLBAR_ICON_SIZE: string;
  PAGE_PADDING: string;
  PAGE_IGNORE_PADDING: string;
  FONT_16: font;
  LAST_INDEX: number;
  HERO_INDEX: number;
  PAGE_MAX_WIDTH: number;
}

interface UiColors {
  MMD_BACKGROUND: string;
  MMD_HERO_BACKGROUND: string;
  MMD_PRIMARY_1: string;
  MMD_PRIMARY_2: string;
  MMD_PRIMARY_3: string;
  MMD_PRIMARY_4: string;
  MMD_PRIMARY_5: string;
  MMD_PRIMARY_6: string;
  MMD_PRIMARY_7: string;
  MMD_PRIMARY_8: string;
  MMD_PRIMARY_9: string;
  MMD_PRIMARY_10: string;
  MMD_SECONDARY_1: string;
  MMD_SECONDARY_2: string;
  MMD_SECONDARY_3: string;
  MMD_SECONDARY_4: string;
  MMD_SECONDARY_5: string;
  MMD_SECONDARY_6: string;
  MMD_SECONDARY_7: string;
  MMD_SECONDARY_8: string;
  MMD_SECONDARY_9: string;
  MMD_SECONDARY_10: string;
  MMD_NEUTRAL_LIGHT: string;
}

export const COLORS: UiColors = {
  MMD_BACKGROUND: '#F8FCFC',
  MMD_HERO_BACKGROUND: '#66778E',
  MMD_PRIMARY_1: '#EBFDFF',
  MMD_PRIMARY_2: '#B8EFF5',
  MMD_PRIMARY_3: '#75DFEB',
  MMD_PRIMARY_4: '#37CDDE',
  MMD_PRIMARY_5: '#00BDD2',
  MMD_PRIMARY_6: '#00A8BA',
  MMD_PRIMARY_7: '#008C9C',
  MMD_PRIMARY_8: '#006975',
  MMD_PRIMARY_9: '#00474F',
  MMD_PRIMARY_10: '#002529',
  MMD_SECONDARY_1: '#FFE1CC',
  MMD_SECONDARY_2: '#FFC499',
  MMD_SECONDARY_3: '#FFA666',
  MMD_SECONDARY_4: '#E5833C',
  MMD_SECONDARY_5: '#D96F23',
  MMD_SECONDARY_6: '#BF5B13',
  MMD_SECONDARY_7: '#A64A08',
  MMD_SECONDARY_8: '#8C3B00',
  MMD_SECONDARY_9: '#662B00',
  MMD_SECONDARY_10: '#331500',
  MMD_NEUTRAL_LIGHT: '#ffffff'
};

export const VALUES: UiValues = {
  TOOLBAR_HEIGHT: '2.75rem',
  TOOLBAR_ICON_SIZE: '1.5rem',
  PAGE_PADDING: '0 1.875rem',
  PAGE_IGNORE_PADDING: '0 -1.875rem',
  FONT_16: {
    SIZE: '1rem',
    LINE_HEIGHT: '1.5rem'
  },
  PAGE_MAX_WIDTH: 1224,
  LAST_INDEX: -1000,
  HERO_INDEX: -500
};
