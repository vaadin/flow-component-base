# flow-component-base

This project is just a `pom` containing common configuration for individual component modules. It includes for an example the build configuration for copying static resources and source codes so they can be shown in the demo.

This allows pom-files of individual components to become very small, as they only need to specify dependencies required by the particular component.

## Component submodules
Individual flow components have been added as submodules to this project, which makes it easier for developing  flow and components.

### get the components
Via using submodules, you can easily get the flow components by using git commands:

1. <code> git clone  https://github.com/vaadin/flow-component-base.git</code>
2. <code> git submodule init</code>
3. <code> git submodele update</code>


>If you just want a single component to be initialed and updated, you can add parameters to the commands in this way: `git submodule init [Path]` and `git submodule update [Path]`, where [Path], in this case, is the component name.

After you get all the component, you can import them as maven project to your IDE and work on the task as what you normally do.

### add a submodule
For adding a submodule, you can simply use the command `git submodule add [github_Url]` at the root directory of `flow-component-base`.

### update a submodule
After you register the submodule (`git submodule init [Path]`), you can update the submoule to the fresh version by using `git submodule update [Path]`. You can check the `Path` of the submodule from `.gitmodules`

Or if you need to update a submodule which you don't have locally, you need to do the 2nd and 3rd steps from `get the components`in the root directory.

For more submodule usage, you can also check the turtorial [here](https://git-scm.com/docs/git-submodule)
