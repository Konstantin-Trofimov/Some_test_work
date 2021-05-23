module.exports = {
    plugins: [
        require('autoprefixer')({
            grid: "autoplace"
        }),
        require('cssnano')({}),
        require('css-mqpacker')({})
    ]
};