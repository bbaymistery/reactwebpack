// 'path' modülü, dosya ve dizin yollarıyla çalışmak için kullanılan yerleşik bir Node.js modülüdür.
const path = require("path");

// 'html-webpack-plugin', bundle edilen JavaScript dosyalarını otomatik olarak içine ekleyen bir HTML dosyası oluşturur.
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 'copy-webpack-plugin', paketlenmemiş dosyaları (örneğin resimler, fontlar) projeden çıktı klasörüne kopyalamak için kullanılır.
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    // entry: Uygulamanın giriş noktasını belirtir. Webpack buradan başlayarak tüm bağımlılıkları tarar.
    // __dirname: O anki dosyanın (webpack.config.js) bulunduğu dizinin tam yolunu verir.
    // path.resolve: Verilen yolları birleştirerek kesin (absolute) bir yol oluşturur.
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),

    // resolve: Webpack'in dosyaları nasıl çözümleyeceğini belirtir.
    resolve: {
        // extensions: Import ederken dosya uzantısı yazılmadığında Webpack'in hangi sırayla bakacağını belirtir.
        // Örneğin: import App from './App' yazınca .tsx, .ts veya .js dosyası aranır.
        extensions: [".tsx", ".ts", ".js"]
    },

    // module: Farklı dosya türlerinin (JS, TS, CSS, Resim vb.) nasıl işleneceğini belirleyen kurallar.
    module: {
        rules: [
            {
                // test: Hangi dosya uzantılarının bu kurala tabi olacağını belirten Regex (Düzenli İfade).
                // /\.(ts|js)x?$/ -> .ts, .tsx, .js, .jsx dosyalarını kapsar.
                test: /\.(ts|js)x?$/,

                // exclude: Bu klasördeki dosyaları işlememesi gerektiğini söyler (performans için).
                exclude: /node_modules/,

                // use: Belirtilen dosyaları işlemek için hangi 'loader'ın (yükleyici) kullanılacağını belirtir.
                // babel-loader: Modern JavaScript ve TypeScript kodlarını eski tarayıcıların anlayabileceği hale çevirir.
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ]
    },

    // output: İşlenen dosyaların (bundle) nereye ve hangi isimle kaydedileceğini belirtir.
    output: {
        // path: Çıktı klasörünün yolu. Burada projenin ana dizinindeki 'build' klasörü hedefleniyor.
        path: path.resolve(__dirname, "..", './build'),

        // filename: Oluşturulacak ana JavaScript dosyasının adı.
        filename: 'bundle.js',
    },



    // plugins: Webpack'in temel işlevlerini genişleten ek araçlar.
    plugins: [
        new HtmlWebpackPlugin({
            // template: Hangi HTML dosyasının kalıp (şablon) olarak kullanılacağını belirtir.
            template: path.resolve(__dirname, "..", "./src/index.html")
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "source",
                    to: "dest",
                },
            ],
        }),
    ]
};