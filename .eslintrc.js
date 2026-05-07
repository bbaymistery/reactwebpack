module.exports = {
  // TypeScript kodlarını analiz edebilmek için kullanılacak olan ayrıştırıcı (parser)
  parser: '@typescript-eslint/parser',
  
  parserOptions: {
    // JavaScript sürümünü belirtir. 2026 yılındayız, bu yüzden en güncel ('latest') sürümü kullanıyoruz.
    ecmaVersion: 'latest',
    // Kodumuzda 'import/export' (ES modülleri) kullanacağımızı belirtir.
    sourceType: 'module',
  },

  settings: {
    react: {
      // Projenizdeki React sürümünü otomatik olarak tespit eder.
      version: 'detect',
    },
  },

  // Hazır kural setlerini dahil ettiğimiz yer. Sadece yüklü olanları bırakıyorum.
  extends: [
    'eslint:recommended',                  // ESLint'in genel önerilen kuralları
    'plugin:react/recommended',           // React için önerilen kurallar
    'plugin:react-hooks/recommended',     // React Hooks kullanımı için zorunlu kurallar
    'plugin:@typescript-eslint/recommended', // TypeScript için önerilen kurallar
    'plugin:import/typescript',//
    'plugin:jsx-a11y/recommended' ,
    'plugin:prettier/recommended',
    'prettier'
],

  rules: {
    // Kendi özel kurallarımızı burada tanımlayabiliriz.
    'no-unused-vars': 'off', // Standart değişken kontrolünü kapatıyoruz (TS olanı kullanacağız)
    '@typescript-eslint/no-unused-vars': ['error'], // Kullanılmayan değişkenler hata verir
    '@typescript-eslint/no-var-requires': 'off', // 'require' kullanımına izin verir
    'react/prop-types': 'off', // TypeScript kullandığımız için Prop-types kontrolüne gerek yok
    'react/jsx-uses-react': 'off', // React 17+ ile gelen yeni JSX transformu için (import React şart değil)
    'react/react-in-jsx-scope': 'off', // JSX içinde React'in kapsamda olmasına gerek yok
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Fonksiyon dönüş tiplerini zorunlu kılmaz
  },
};