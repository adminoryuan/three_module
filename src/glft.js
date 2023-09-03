
import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'; // 导入GLTFLoader

export function Run() {
    //建立场景    
    const scene = new Three.Scene();

    //网格和辅助线
    // 创建三维坐标系
    var axesHelper = new Three.AxesHelper(150);
    // 创建地面网格辅助

    scene.add(axesHelper);

    //网格地面
    const gridHelper = new Three.GridHelper(10, 10); // 参数表示网格的大小和分割数
    scene.add(gridHelper)




    //创建立方体

    //加载外部模型
    const loader = new GLTFLoader();
    loader.load('/static/scene.gltf', function (gltf) {
        console.log('控制台查看加载gltf文件返回的对象结构', gltf);
        console.log('gltf对象场景属性', gltf.scene);
        // 返回的场景对象gltf.scene插入到threejs场景中
        scene.add(gltf.scene);
        //建立相机
        const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.x=1000
        //建立渲染器
        const render = new Three.WebGLRenderer();
        render.setSize(window.innerWidth, window.innerHeight);
        document.getElementById("canvas").appendChild(render.domElement);

        //添加轨道控制器
        const controls = new OrbitControls(camera, render.domElement);
        camera.lookAt(gltf.scene.position);
        const ambientLight = new Three.AmbientLight(0xffffff, 0.5); // 添加环境光照
        scene.add(ambientLight);
        gltf.scene.position.set(0, 0, 0); // 设置模型位置
        gltf.scene.scale.set(1, 1, 1); // 设置模型缩放
        let isX=true;
        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            gltf.scene.position.z+=0.1
            
            console.log(gltf.scene.position)
            render.render(scene, camera);

        }
        animate();
    })
}