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
- Bu aşamadaki tüm geliştirmeler `tutorial-3` branch'ine kaydedildi.

---
**Not:** Her adımın kodlarını ilgili branch üzerinden inceleyebilirsiniz.
