
import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export function Run(){
    //建立场景    
    const scene=new Three.Scene();

    //网格和辅助线
    // 创建三维坐标系
    var axesHelper = new Three.AxesHelper(150);
    // 创建地面网格辅助

    scene.add(axesHelper);

    //网格地面
    const gridHelper = new Three.GridHelper(10, 10); // 参数表示网格的大小和分割数
    scene.add(gridHelper)
    
    


    //创建立方体
    const geometry=new Three.BoxGeometry(1,1,1)
    const material = new Three.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new Three.Mesh( geometry, material );
    cube.position.y=1
    cube.position.z=1
    scene.add( cube );


    //建立相机
    const camera=new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    
   

    //建立渲染器

    const render=new Three.WebGLRenderer();
    render.setSize(window.innerWidth,window.innerHeight);
    document.getElementById("canvas").appendChild(render.domElement);
    
     //添加轨道控制器
     const controls = new OrbitControls(camera, render.domElement);
     camera.position.set( 0, 0, 2 );

    function animate() {
        requestAnimationFrame( animate );
        controls.update();
        cube.position.x+=0.001   
    
        render.render( scene, camera );

    }
    animate();
    
}