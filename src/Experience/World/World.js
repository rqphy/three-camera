import Experience from '../Experience'
import Environment from './Environment'
import Cube from './Cube'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup if source
        })
        
        // Setup if no source
        this.environment = new Environment()
        this.cubes = [
            new Cube({color: 0xff0000, position: {x: -1, y:  1, z: 0}}),
            new Cube({color: 0xff00ff, position: {x:  1, y:  1, z: 0}}),
            new Cube({color: 0x00ffff, position: {x: -1, y: -1, z: 0}}),
            new Cube({color: 0x00ff00, position: {x:  1, y: -1,  z: 0}})
        ]
    }
    
    update()
    {
        // Here the update functions
        for(const cube of this.cubes)
        {
            cube.update()
        }
    }
}