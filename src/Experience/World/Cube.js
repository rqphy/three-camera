import * as THREE from 'three'
import Experience from '../Experience'

export default class Cube
{
    #color;
    #position;

    constructor({color = 0x00ffff, position = {x: 0, y: 0, z: 0}} = {})
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.interactionManager = this.experience.interactionManager
        this.resources = this.experience.resources
        this.#color = color
        this.#position = position

        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry()
    {
        this.geometry = new THREE.BoxGeometry(1, 1, 1)
    }

    setTextures()
    {
        this.textures = {}
    }

    setMaterial()
    {
        this.material = new THREE.MeshStandardMaterial({
            color: this.#color
        })
    }

    setInteractions()
    {
        this.mesh.addEventListener('click', (_event) =>
        {
            _event.stopPropagation()
            console.log(this.mesh)
        })
    }

    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.set(
            this.#position.x,
            this.#position.y,
            this.#position.z
        )
        this.setInteractions()
        this.interactionManager.addMesh(this.mesh)
        this.scene.add(this.mesh)
    }
}