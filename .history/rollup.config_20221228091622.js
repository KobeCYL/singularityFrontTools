import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import { terser } from 'rollup-plugin-terser'
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import strip from "@rollup/plugin-strip";
import babel from 'rollup-plugin-babel'

export default {
    input: "./src/index.js",
    output: [
      {
        file: './dist/my-lib-umd.js',
        format: 'umd',
        // name: 'umd'   
        //当入口文件有export时，'umd'格式必须指定name
        //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
      },
      {
        file: './dist/my-lib-es.js',
        format: 'es'
      },
      {
        file: './dist/my-lib-cjs.js',
        format: 'cjs'
      }
    ],
    plugins:[
      // resolve(),
      babel({
          exclude: 'node_modules/**'
      }),
      // commonjs(),
      // postcss(),
      // autoprefixer(),
      terser(),
      // typescript(),
      strip()
    ]
  }