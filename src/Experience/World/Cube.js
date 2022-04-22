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
        console.log(this.#color)
        this.material = new THREE.MeshStandardMaterial({
            color: this.#color
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
        this.scene.add(this.mesh)
    }
}