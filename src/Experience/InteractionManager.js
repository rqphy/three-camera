import * as THREE from 'three'
import Experience from './Experience'
import { InteractionManager as InteractManager } from "three.interactive";

export default class InteractionManager
{
    constructor()
    {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.renderer = this.experience.renderer
        
        console.log(this.renderer, this.camera, this.canvas)
        this.setInstance()
    }

    setInstance()
    {
        this.instance = new InteractManager(
            this.renderer,
            this.camera,
            this.canvas
        )
    }

    addMesh(mesh)
    {
        this.instance.add(mesh)
    }

    update()
    {
        this.instance.update()
    }
}