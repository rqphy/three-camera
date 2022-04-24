import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Experience from './Experience'

export default class Camera
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.time = this.experience.time

        this.setInstance()
        this.setAnimation()
        // this.setOrbitControls()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(
            75,
            this.sizes.width / this.sizes.height,
            0.1,
            1000
        )
        this.instance.position.set(0, 0, 5)
        this.scene.add(this.instance)
    }

    setOrbitControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    setAnimation()
    {
        this.animations = {}

        this.animations.x = 0
        this.animations.y = 0

        this.animations.limits = {}
        this.animations.limits.x = 0
        this.animations.limits.y = 0

        this.animations.speed = {}
        this.animations.speed.x = 0.00061
        this.animations.speed.y = 0.00061
    }

    setAnimationLimits(limits)
    {
        this.animations.limits = limits
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        this.animations.x += this.animations.speed.x * this.time.delta
        this.animations.y += this.animations.speed.y * this.time.delta

        if(this.animations.x >= this.animations.limits.x)
        {
            this.animations.x = this.animations.limits.x
        }

        if(this.animations.y >= this.animations.limits.y)
        {
            this.animations.y = this.animations.limits.y
        }



        this.instance.position.set(
            this.animations.x,
            this.animations.y,
            this.animations.z    
        )
        // this.controls.update()
    }
}