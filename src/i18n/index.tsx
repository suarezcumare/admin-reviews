import { englishMessages } from 'admin-on-rest';
import spanishMessages from 'aor-language-spanish';
import portuguesMessages from 'aor-language-portugues';

import customSpanishMessages from './es';
import customEnglishMessages from './en';
import customPortuguesMessages from './pt';

export default {
    es: { ...spanishMessages, ...customSpanishMessages },
    en: { ...englishMessages, ...customEnglishMessages },
    pt: { ...customPortuguesMessages, ...portuguesMessages },
};
