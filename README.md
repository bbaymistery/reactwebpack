# Tutorial 01: Webpack, React ve TypeScript Kurulumu

Bu bölümde, sıfırdan bir React ve TypeScript projesini Webpack ile nasıl yapılandıracağımızı öğrendik ve karşılaşılan hataları giderdik.

## Yapılan Adımlar (Step-by-Step)

### 1. Yazım Yanlışlarının Giderilmesi (Typo Fix)
`package.json` dosyasında bulunan ve komutların çalışmasını engelleyen `wepback` yazım hataları `webpack` olarak düzeltildi.

### 2. Bağımlılıkların Düzenlenmesi
Yanlış yüklenen paketler temizlendi ve projenin çalışması için gerekli olan temel paketler yüklendi:
- `webpack`, `webpack-cli`, `webpack-dev-server`
- `react`, `react-dom`
- `@babel/core`, `babel-loader` ve gerekli presetler.

### 3. Webpack Yapılandırması (`webpack.config.js`)
Webpack'in projeyi nasıl derleyeceğini belirleyen ayarlar yapıldı:
- **`entry`**: Uygulamanın başlangıç noktası `src/index.tsx` olarak belirlendi.
- **`output`**: Derlenen dosyaların `build` klasörüne `bundle.js` adıyla çıkarılması sağlandı.
- **`__dirname` Kullanımı**: Dosya yollarının her bilgisayarda doğru çalışması için `path.resolve` ve `__dirname` yapısı kuruldu.
- **Loaders**: `.ts` ve `.tsx` dosyalarını Babel üzerinden işlemek için kural eklendi.

### 4. TypeScript Yapılandırması
Hatalı isimlendirilen `ts.config.json` dosyası, standart isim olan `tsconfig.json` olarak değiştirildi ve gereksiz dosyalar temizlendi.

### 5. Geliştirme Sunucusu (Dev Server) Kurulumu
`npm run start` komutuyla projenin tarayıcıda otomatik olarak açılması ve her değişiklikte kendini yenilemesi sağlandı.

### 6. Git Branch (Dal) Organizasyonu
Proje geçmişini düzenli tutmak için:
- Tüm bu değişiklikler `tutorial-01` branch'ine kaydedildi.
- `main` branch'inin boş kalması sağlandı.

---

# Tutorial 02: CSS, Resimler ve Asset Yönetimi

Bu bölümde, projemize CSS dosyalarını ve resim (JPG, SVG) gibi varlıkları (assets) nasıl dahil edeceğimizi öğrendik.

## Yapılan Adımlar (Step-by-Step)

### 1. Stil Dosyalarının Eklenmesi (CSS)
Projenin görselliğini yönetmek için CSS desteği eklendi:
- `css-loader` ve `style-loader` paketleri yüklendi.
- `webpack.config.js` dosyasına `.css` dosyalarını işlemek için gerekli kurallar eklendi.
- `styles.css` dosyası oluşturuldu ve `App.tsx` içine import edildi.

### 2. Resim ve Varlık Yönetimi (Assets)
Webpack 5'in yerleşik **Asset Modules** özelliği kullanılarak resim desteği sağlandı:
- **`asset/resource`**: Büyük resim dosyaları (JPG, PNG) için kullanıldı. Bu dosyalar derleme sonrası `build` klasörüne kopyalanır.
- **`asset/inline`**: SVG ve Font dosyaları için kullanıldı. Bu dosyalar Base64 formatında doğrudan JavaScript içine gömülür.

### 3. TypeScript Tanımlamaları (`d.ts`)
TypeScript'in `.jpg` ve `.svg` gibi dosya uzantılarını tanıması için `declarations.d.ts` dosyası oluşturuldu/güncellendi. Bu sayede `import IMAGE from './image.jpg'` şeklinde kullanım mümkün oldu.

### 4. Hata Giderme ve İyileştirme
- Webpack yapılandırmasındaki Regex (düzenli ifade) hataları giderildi (`\` yerine `|` kullanımı).
- `App.tsx` bileşeni güncellenerek eklenen resimlerin ve stillerin sayfada gösterilmesi sağlandı.

### 5. Git Branch (Dal) Organizasyonu
- Bu aşamadaki tüm geliştirmeler `tutorial-02` branch'ine kaydedildi.

---

# Tutorial 03: Çevresel Değişkenler (Environment Variables)

Bu bölümde, projemize farklı ortamlar (Geliştirme ve Üretim) için nasıl değişken tanımlayacağımızı ve Webpack yapılandırmasını nasıl organize edeceğimizi öğrendik.

## Yapılan Adımlar (Step-by-Step)

### 1. Webpack Yapılandırmasının Bölünmesi
Webpack ayarlarını daha yönetilebilir kılmak için dosyalar ayrıldı:
- `webpack.common.js`: Ortak ayarlar.
- `webpack.dev.js`: Geliştirme (development) ortamına özel ayarlar.
- `webpack.prod.js`: Üretim (production) ortamına özel ayarlar.
- `webpack.config.js`: Ortama göre hangi dosyanın kullanılacağını seçen ana giriş dosyası.

### 2. `webpack-merge` Kullanımı
Ortak ayarlar ile ortama özel ayarları birleştirmek için `webpack-merge` kütüphanesi eklendi.

### 3. Çevresel Değişkenlerin Tanımlanması (`DefinePlugin`)
`webpack.DefinePlugin` kullanılarak uygulama içine global değişkenler enjekte edildi:
- **Dev**: `process.env.name` -> "Elgun"
- **Prod**: `process.env.name` -> "Eliko"
- **Not**: String değerlerin doğru algılanması için `JSON.stringify()` kullanıldı.

### 4. React İçinde Kullanım
`App.tsx` dosyası güncellenerek `process.env.NODE_ENV` ve `process.env.name` değişkenlerinin ekranda gösterilmesi sağlandı.

### 5. Git Branch (Dal) Organizasyonu
- Bu aşamadaki tüm geliştirmeler `tutorial-03` branch'ine kaydedildi.

---

# Tutorial 04: React Refresh & Hot Module Replacement (HMR)

Bu bölümde, kodda yaptığımız değişikliklerin sayfa yenilenmeden yansıtılmasını ve bileşenlerin state'inin (durumunun) korunmasını sağlayan "Fast Refresh" özelliğini kurduk. Ayrıca geliştirme sunucusu ayarlarını optimize ettik.

## Yapılan Adımlar (Step-by-Step)

### 1. Gerekli Paketlerin Yüklenmesi
React Refresh özelliğini Webpack ile kullanabilmek için şu paketler eklendi:
- `@pmmmwh/react-refresh-webpack-plugin`
- `react-refresh`

### 2. Webpack Yapılandırması (`webpack.dev.js`)
Geliştirme ortamı ayarlarında:
- `devServer.hot: true` yapılarak HMR etkinleştirildi.
- `devServer.open: true` eklenerek sunucu başladığında tarayıcının otomatik açılması sağlandı (Bu sayede `package.json` içindeki `--open` kaldırıldı).
- `ReactRefreshWebpackPlugin` eklentiler listesine dahil edildi.

### 3. Babel Yapılandırması (`babel.config.js`)
`.babelrc` dosyası silinerek daha esnek olan `babel.config.js` yapısına geçildi. Burada `react-refresh/babel` eklentisi **sadece geliştirme modunda** (`process.env.NODE_ENV !== 'production'`) çalışacak şekilde ayarlandı. Bu değişiklik aynı zamanda TypeScript dosyalarındaki (`.tsx`) "Unexpected token" hatalarını da giderdi.

### 4. Counter Bileşeni ve State Testi
- `Counter.tsx` adında bir sayaç bileşeni oluşturuldu.
- `App.tsx` içinde bu bileşen çağrıldı.
- Sayaca tıklandığında artan sayının, kodda başka bir dosya değiştirildiğinde (App.tsx gibi) sıfırlanmadığı (state preservation) test edildi.

### 5. Git Branch (Dal) Organizasyonu
- Bu aşamadaki tüm geliştirmeler `tutorial-04` branch'ine kaydedildi.

---

# Tutorial 05: ESLint Yapılandırması

Bu bölümde, projemizde kod kalitesini artırmak ve standartları korumak için ESLint kurulumunu gerçekleştirdik.

## Yapılan Adımlar (Step-by-Step)

### 1. ESLint ve Eklentilerin Kurulumu
Modern bir yapılandırma için gerekli paketler yüklendi:
- `eslint` (^9.0.0)
- `eslint-plugin-react` ve `eslint-plugin-react-hooks`
- `@typescript-eslint/parser` ve `@typescript-eslint/eslint-plugin`

### 2. Yapılandırma Dosyası (`.eslintrc.js`)
Proje kök dizininde detaylı Türkçe açıklamalar içeren bir `.eslintrc.js` dosyası oluşturuldu:
- **`ecmaVersion: 'latest'`**: 2026 yılı standartlarına uygun en güncel JavaScript özellikleri etkinleştirildi.
- **`parser`**: TypeScript dosyalarını analiz etmek için gerekli ayarlar yapıldı.
- **`rules`**: React ve TypeScript için özel kurallar (kullanılmayan değişkenlerin hata vermesi gibi) tanımlandı.

### 3. Lint Scripti
`package.json` içine `"lint": "eslint --fix ..."` komutu eklenerek tüm projenin tek komutla denetlenmesi ve basit hataların otomatik düzeltilmesi sağlandı.

---

# Tutorial 06: Prettier ile Kod Formatlama

Bu bölümde, kodun okunabilirliğini artırmak ve yazım stilini otomatize etmek için Prettier aracını kurduk.

## Yapılan Adımlar (Step-by-Step)

### 1. Prettier Kurulumu
`prettier` paketi ve ESLint ile çakışmaları önlemek için `eslint-config-prettier` ve `eslint-plugin-prettier` paketleri yüklendi.

### 2. Yapılandırma Dosyası (`.prettierrc.js`)
Kodun nasıl formatlanacağını belirleyen ayarlar yapıldı:
- Tek tırnak kullanımı, noktalı virgül zorunluluğu, satır uzunluğu gibi standartlar belirlendi.

### 3. Format Scripti
`package.json` içine `"format": "prettier --write ..."` komutu eklenerek dosyaların otomatik olarak düzenlenmesi sağlandı.

---

# Tutorial 07: Husky & lint-staged (Git Hooks)

Bu bölümde, hatalı veya formatlanmamış kodların Git'e commit edilmesini engellemek için Husky ve lint-staged araçlarını entegre ettik.

## Yapılan Adımlar (Step-by-Step)

### 1. Husky ve lint-staged Kurulumu
- `husky`: Git hook'larını (commit öncesi işlemler gibi) yönetmek için kullanıldı.
- `lint-staged`: Sadece değişen (staged) dosyalar üzerinde işlem yaparak performansı artırmak için kullanıldı.

### 2. Pre-commit Hook Yapılandırması
`package.json` dosyasına eklenen ayarlar ile her `git commit` öncesinde:
- Sadece değişen `.ts`, `.tsx`, `.js`, `.jsx` dosyalarında ESLint (`eslint --fix`) çalıştırılır.
- Tüm değişen dosyalarda (CSS, MD dahil) Prettier (`prettier --write`) çalıştırılır.
- Eğer lint hataları giderilemezse, commit işlemi otomatik olarak durdurulur.

### 3. Otomasyon
Bu sayede ekip çalışmasında kod kalitesi ve format standartları commit aşamasında garanti altına alınmış oldu.

---
**Not:** Her adımın kodlarını ilgili branch üzerinden inceleyebilirsiniz.

