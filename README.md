# bits.mix

Collider.JAM Bits of Wisdom - a collection of code snippets showing practical examples of using Collider.JAM features.



## How to Run

[Collider.JAM](https://collider.land)
MUST be installed first: ```npm i -g collider.jam```.

Run the ```jam``` command in the root folder and cycle through examples with Space/Backspace or Left/Right Arrows.

Or open any included named \*.mod folder
and run them individually with ```jam```.



## Mix Structure

The project ```.mix``` folder contains multiple mods.

_Mods_ represent pluggable modules in Collider.JAM.

Each _.mod_ forms a separate structure that can be independent of other mods. That is the reason you can run any named ```*.mod``` in this project separately - each one forms a self-sufficient unit that is unaware of others and relies only on Collider.JAM-provided features.

That can't be said about ```mod/``` which is a central mod that glues all others together - it provides the ability to switch between the samples with keystrokes.


## Included Samples

* brownian.mod - a simulation of Brownian motion by a dot
* mover.mod - a circle that moves horizontally
* circle.mod - simple bouncing circle
* circles.mod - multiple random circles
* planet.mod - bouncing planet texture
* planet-boost.mod - boost the planet speed by clicking on it
* shapes.mod - draws various shapes in different colors
* boxes.mod - how to use boxes for testing life forms
* eyes.mod - eyes looking at the mouse
* resources.mod - how to organize resources
* cue.mod - how to create commands and trigger time-bound events


## Cycle Through

To cycle through samples, run with the ```--cycle``` flag with optional seconds to switch:

```
jam --cycle
jam --cycle 45
```

The default cycle value is 30.


