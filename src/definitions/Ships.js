import { Color3, Vector3 } from '@babylonjs/core';

export const Ships = [
    {
        name: 'Hunter',
        asset: 'assets/drone_v9_cybertech/',
        description: 'Cheap, quick and agile, the Hunter can be used as a quick strike weapon, able to reach enemy lines quickest. Can not withstand much heat though.',
        stats: {
            cp: 1,
            hp: 1000,
            attack: {
                base: 30,
                variable: 5,
            },
            defence: 2,
            speed: 6,
            range: 6,
            agility: 25,
        },
        scale: 1000,
        combatScale: 0.6,
        visuals: {
            beamColor: new Color3(0, 1, 0),
            beamWidth: Math.PI / 256,
        },
    },
    {
        name: 'Scorpio',
        asset: 'assets/drone_v2/',
        description: 'As lightest of the heavier ships, the Scorpio retains some of the speed and maneuverability of the frigate while offering big improvements in the hull and weaponry.',
        stats: {
            cp: 4,
            hp: 4000,
            attack: {
                base: 100,
                variable: 20,
            },
            defence: 12,
            speed: 4,
            range: 8,
            agility: 15,
        },
        scale: 1400,
        combatScale: 0.6,
        visuals: {
            beamColor: new Color3(0.2, 0.2, 1),
            beamWidth: Math.PI / 96,
            rotationModifierY: -1,
        },
    },
    {
        name: 'Zeneca',
        asset: 'assets/zeneca_brute/',
        description: 'The Zeneca is an effective killing machine, providing both active support and serving as an artillery line raining heavy damage on enemy ships.',
        stats: {
            cp: 5,
            hp: 5000,
            attack: {
                base: 130,
                variable: 10,
            },
            defence: 15,
            speed: 3,
            range: 10,
            agility: 10,
        },
        scale: 400,
        combatScale: 0.8,
        visuals: {
            beamColor: new Color3(1, 1, 1),
            beamWidth: Math.PI / 96,
            rotationModifierY: 2,
            rotationOddOffsetY: Math.PI,
        },
    },
    {
        name: 'Luminaris',
        asset: 'assets/luminaris_starship/',
        description: 'Fitted with state of the art weaponry and protection, the Luminaris is the ultimate fighting force in the galaxy.',
        stats: {
            cp: 15,
            hp: 10000,
            attack: {
                base: 200,
                variable: 5,
            },
            defence: 20,
            speed: 2,
            range: 12,
            agility: 0,
        },
        scale: 120,
        combatScale: 0.8,
        visuals: {
            beamColor: new Color3(1, 0, 1),
            beamWidth: Math.PI / 64,
        },
    },
];
