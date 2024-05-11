import { createVuetify } from 'vuetify';
import { aliases, fa } from 'vuetify/iconsets/fa';
import { mdi } from 'vuetify/iconsets/mdi-svg';

export default createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            fa,
            mdi,
        },
    },
});