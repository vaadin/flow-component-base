# Flow-component-base

This project is just a `pom` containing common configuration for individual component modules. It includes for an example the build configuration for copying static resources and source codes so they can be shown in the demo.

This allows pom-files of individual components to become very small, as they only need to specify dependencies required by the particular component.

 - This branch (`1.0`) is for V10 maintenance
 - `master` branch is for V11 development

## Flow Components as Git submodules
All the Flow components have been added as submodules to this project. You can easily get all of them with:
 - <code> git clone  https://github.com/vaadin/flow-component-base.git --recurse-submodules</code> (or after cloning `flow-component-base` use <code>git submodule init</code> instead)

You can update all the submodules for latest `master` branch with:
 - <code>git submodule update --remote</code>

You can import them component modules as Maven projects to your IDE.

For more submodule usage, you can also check the [tutorial](https://git-scm.com/docs/git-submodule)
