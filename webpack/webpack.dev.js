const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
module.exports = {
    mode: 'development',
    devServer: {
        // devServer: Webpack'in sunduğu yerel geliştirme sunucusu ayarları.
        // hot: true -> Hot Module Replacement (HMR) özelliğini etkinleştirir.
        // Bu sayede kodda yapılan değişiklikler sayfa yenilenmeden yansıtılır.
        hot: true,

        //open :true --> dev server basda tarayicida acir (package deki jsona o--open yazmak gibi o yuzden orani kaldirdikk)
        open: true
    },
    // devtool: Hata ayıklama (debug) için kaynak haritaları (source maps) oluşturur.
    // 'cheap-module-source-map' hızlı ve yeterli bilgi sunan bir seçenektir.
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Elgun')
        }),
        // ReactRefreshWebpackPlugin: React bileşenlerinin state'ini (durumunu) kaybetmeden 
        // güncellenmesini sağlar. (HMR ile birlikte çalışır)
        new ReactRefreshWebpackPlugin(),
    ]
}