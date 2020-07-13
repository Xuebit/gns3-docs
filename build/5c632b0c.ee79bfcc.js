(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return g}));var o=n(2),s=n(9),i=(n(0),n(211)),a=n(213),r={id:"the-gns3-gui",title:"The GNS3 GUI",sidebar_label:"The GNS3 GUI"},c={id:"using-gns3/beginners/the-gns3-gui",isDocsHomePage:!1,title:"The GNS3 GUI",description:"Introduction",source:"@site/docs/using-gns3/beginners/the-gns3-gui.md",permalink:"/docs/using-gns3/beginners/the-gns3-gui",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/beginners/the-gns3-gui.md",sidebar_label:"The GNS3 GUI",sidebar:"someSidebar",previous:{title:"Your First Cisco Topology",permalink:"/docs/getting-started/your-first-cisco-topology"},next:{title:"Use custom symbols in GNS3",permalink:"/docs/using-gns3/beginners/change-node-symbol"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Screen Layout",id:"screen-layout",children:[]},{value:"GNS3 Workspace",id:"gns3-workspace",children:[]},{value:"Topology Summary",id:"topology-summary",children:[]},{value:"Servers Summary",id:"servers-summary",children:[]},{value:"GNS3 Console",id:"gns3-console",children:[]},{value:"Devices Toolbar",id:"devices-toolbar",children:[]},{value:"GNS3 Toolbar",id:"gns3-toolbar",children:[]},{value:"First GNS3 Toolbar Group",id:"first-gns3-toolbar-group",children:[{value:"New Blank Project",id:"new-blank-project",children:[]},{value:"Open Project",id:"open-project",children:[]}]},{value:"Second GNS3 Toolbar Group",id:"second-gns3-toolbar-group",children:[{value:"Manage Snapshot",id:"manage-snapshot",children:[]},{value:"Show/Hide Interface Labels",id:"showhide-interface-labels",children:[]},{value:"Console Connect to all Devices",id:"console-connect-to-all-devices",children:[]}]},{value:"Third GNS3 Toolbar Group",id:"third-gns3-toolbar-group",children:[]},{value:"Fourth GNS3 Toolbar Group",id:"fourth-gns3-toolbar-group",children:[]}],b={rightToc:l};function g(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"This document explains various options in the GNS3 Graphical User Interface (GUI) which help you create and manage GNS3 projects."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This guide applies to both the Local Server and GNS3 VM installations. Both installation options use the same user interface for the management of projects."))),Object(i.b)("h2",{id:"screen-layout"},"Screen Layout"),Object(i.b)("p",null,"The following figure shows a screenshot of the version 2.2.0 GNS3 GUI:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/1.jpg")}),Object(i.b)("p",null,"The GUI is subdivided into several sections:  The Workspace, Toolbar, Devices Toolbar, Topology Summary, Servers Summary, and the Console."),Object(i.b)("h2",{id:"gns3-workspace"},"GNS3 Workspace"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/2.jpg")}),Object(i.b)("p",null,"The Workspace is where devices will be \u201cdragged and dropped\u201d in order to build your topology."),Object(i.b)("h2",{id:"topology-summary"},"Topology Summary"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/3.jpg")}),Object(i.b)("p",null,"This pane will display devices currently in the Workspace, their status (on/off/suspended), as well as which devices are connected to one another."),Object(i.b)("h2",{id:"servers-summary"},"Servers Summary"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/4.jpg")}),Object(i.b)("p",null,"This pane will display the servers in use (local, local GNS3-VM, remote), their state (on/off), as well as their current resource usage.  Note that the local server includes statistics for more than just GNS3, so if you\u2019re heavily multitasking, that will be reflected in its reported resource usage."),Object(i.b)("h2",{id:"gns3-console"},"GNS3 Console"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/5.jpg")}),Object(i.b)("p",null,"This pane will display any errors/issues GNS3 itself encounters, and will output those messages here. You may be be asked by Moderators or other community members attempting to help you will ask that you report any error messages, as well as potentially run debug commands here for more verbose error output.  "),Object(i.b)("h2",{id:"devices-toolbar"},"Devices Toolbar"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/6.jpg")}),Object(i.b)("p",null,"Devices in GNS3 are divided by category, such as Routers, Switches, End Devices, Security, All Devices, along with the Add Link button at the bottom (it looks like a network cable)."),Object(i.b)("h2",{id:"gns3-toolbar"},"GNS3 Toolbar"),Object(i.b)("p",null,"The GNS3 toolbar found at the top of the GNS3 GUI, contains groups of icons that allow you to easily perform common tasks."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/7.jpg")}),Object(i.b)("p",null,"The toolbar groups icons into specific functions or features. This gives you a simple way of getting things done."),Object(i.b)("h2",{id:"first-gns3-toolbar-group"},"First GNS3 Toolbar Group"),Object(i.b)("p",null,"The first group allows you to create, open and save projects:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/8.jpg")}),Object(i.b)("h3",{id:"new-blank-project"},"New Blank Project"),Object(i.b)("p",null,"Click the New Blank Project button to create a new project in GNS3. You will be asked for your new project name and folder to save the new project."),Object(i.b)("p",null,"To create a new GNS3 project, click the ",Object(i.b)("strong",{parentName:"p"},"New Blank Project")," button on the GNS3 Toolbar:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/9.jpg")}),Object(i.b)("p",null,"GNS3 will prompt you for the Name and Location of your new project.The default name is untitled and default location ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\Users\\<username>\\GNS3")," in  Windows:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/10.jpg")}),Object(i.b)("p",null,"Give your project a name, change the location if desired and click OK"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/11.jpg")}),Object(i.b)("p",null,"A new project is opened:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/12.jpg")}),Object(i.b)("h3",{id:"open-project"},"Open Project"),Object(i.b)("p",null,"Click the ",Object(i.b)("strong",{parentName:"p"},"Open Project")," button to open an existing GNS3 project. You will be asked for your new project name and folder to save the new project."),Object(i.b)("p",null,"To Open an existing project, click the ",Object(i.b)("strong",{parentName:"p"},"Open Project")," button on the GNS3 Toolbar:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/13.jpg")}),Object(i.b)("p",null,"An Open project window will display. Navigate to the GNS3 projects folder. By default this is ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\Users\\<username>\\GNS3")," in Windows:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/14.jpg")}),Object(i.b)("p",null,"Select the project file and click then ",Object(i.b)("strong",{parentName:"p"},"Open")),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/15.jpg")}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Project files use the .gns3 extension. For example, in the above figure, the name is: ",Object(i.b)("strong",{parentName:"p"},"ospf-2.gns3")))),Object(i.b)("p",null,"The project is opened with all devices turned off:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/16.jpg")}),Object(i.b)("p",null,"(GNS3 now saves as you go, so there\u2019s no longer discrete Save button)"),Object(i.b)("h2",{id:"second-gns3-toolbar-group"},"Second GNS3 Toolbar Group"),Object(i.b)("p",null,"The second GNS3 Toolbar Group allows you to create project snapshots, show or hide interface labels and connect to device consoles:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/17.jpg")}),Object(i.b)("h3",{id:"manage-snapshot"},"Manage Snapshot"),Object(i.b)("p",null,"Click the Snapshot button to create a snapshot of your devices, links and IOS configurations. The Snapshots in GNS3 are similar to snapshots in other systems such as VMware which allow you to create a saved version of your project at a specific point in time. You can then revert back to this later."),Object(i.b)("p",null,"::: important\nIf you want your router configurations saved, make sure you save them via the router CLI.\nClicking the Snapshot button will open a window giving you the options to create/delete/restore a snapshot.\n:::"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/18.jpg")}),Object(i.b)("p",null,"To create a new Snapshot of the current topology, all devices in it must first be stopped, so save their configuration changes first in their CLI, then click Create."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/19.jpg")}),Object(i.b)("p",null,"Give the Snapshot a unique name, and click OK."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/20.jpg")}),Object(i.b)("p",null,"The newly created Snapshot will be displayed by name, along with the creation date & time in DD/MM/YY and 24hr formats."),Object(i.b)("p",null,"Snapshots are stored on a per-project basis, so in order to restore a Snapshot of project ospf-2.gns3 (for example), you\u2019d need to already have that project open."),Object(i.b)("p",null,"Click \u2018Close\u2019 to exit this pop-up window."),Object(i.b)("h3",{id:"showhide-interface-labels"},"Show/Hide Interface Labels"),Object(i.b)("p",null,"Click the ",Object(i.b)("strong",{parentName:"p"},"Show/Hide interface labels")," button to display or hide interface labels in your GNS3 projects. The button will toggle the displaying or hiding of abbreviated interface names. For example interface FastEthernet 0/0 is displayed as f0/0 in GNS3."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Default")," By default, interface labels are hidden."),Object(i.b)("p",null,"To display interface labels click the Show/Hide interface labels button on the GNS3 Toolbar:  "),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/21.jpg")}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Result")," Interface labels are displayed in devices in the workspace. The button also displays as depressed:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/22.jpg")}),Object(i.b)("p",null,"Click the ",Object(i.b)("strong",{parentName:"p"},"Show/Hide interface labels")," button again to hide the labels."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/23.jpg")}),Object(i.b)("h3",{id:"console-connect-to-all-devices"},"Console Connect to all Devices"),Object(i.b)("p",null,"The console connect button on the toolbar will open connections to each running device in your topology using whichever terminal emulation program you have selected in GNS3\u2019s global preferences."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/24.jpg")}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The following isn\u2019t a Toolbar button, but you can elect to open console connections to a subset of topology devices by selecting them in the workspace, right-clicking, and left-clicking on \u201cConsole\u201d in the pop-up menu"))),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/25.jpg")}),Object(i.b)("h2",{id:"third-gns3-toolbar-group"},"Third GNS3 Toolbar Group"),Object(i.b)("p",null,"The third GNS3 Toolbar Group allows you to Start, Suspend, Stop, and Restart all the topology devices at once."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/26.jpg")}),Object(i.b)("p",null,"The buttons themselves are pretty self-explanatory, but you will notice both in the Workspace and Topology Summary panes that the indicators will change color for devices that are running, suspended, or stopped  (restarted devices switch to Started, and you\u2019ll see them reload in any open console connection)."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/27.jpg")}),Object(i.b)("p",null,"The Start button will power on every device in the Workspace, and the indicators on the links will turn green."),Object(i.b)("p",null,"You can also verify the status of each link in the Topology Summary, to the right:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/28.jpg")}),Object(i.b)("p",null,"The link indicators for Suspended devices will turn yellow. Suspended devices still have any non-saved configuration changes stored in your system RAM, and while switch to a powered on state faster than stopped devices will (again, this will also be reflected in the Topology Summary).\nStopped devices have their link indicators turn red, and are fully powered off. You\u2019ll need to either click the Start or Restart buttons to turn them back on."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/29.jpg")}),Object(i.b)("p",null,"The Restart button is just to the right of the Stop button:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/30.jpg")}),Object(i.b)("h2",{id:"fourth-gns3-toolbar-group"},"Fourth GNS3 Toolbar Group"),Object(i.b)("p",null,"The fourth GNS3 Toolbar Group allows you to annotate notes into the topology Workspace, import an image to serve as a background, add shapes and lines, as well as zoom in/out, or take a screenshot of the Workspace"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/31.jpg")}),Object(i.b)("p",null,"Annotate allows you to add notes in the Workspace related to your topology (to make it easier to remember when coming back to it later, instead of viewing the config files of each device)."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/32.jpg")}),Object(i.b)("p",null,"If you right-click on the current text box, you\u2019ll get options to duplicate the text (comes in handy of you\u2019re adding IP addressing to a large topology, raising/lowering the text a layer, as well as Text edit. Text edit gives you the ability to change the text color, font, font size, and orientation."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/33.jpg")}),Object(i.b)("p",null,"The background image button will allow to select an image (from the My Pictures folder by default) to import as the background image for the topology,"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/34.jpg")}),Object(i.b)("p",null,"When the pop-up window opens, asking you which image you\u2019d like to use as the topology background, select it, and click ",Object(i.b)("strong",{parentName:"p"},"'Open'"),":"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/35.jpg")}),Object(i.b)("p",null,"That image will be added as the background. Ideally, you\u2019d use an image roughly the same size (or larger) than the topology you\u2019re creating:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/36.jpg")}),Object(i.b)("p",null,"(obviously this background image was quite small, but it\u2019s just here for illustration purposes)"),Object(i.b)("p",null,"The Circle, Square, and Line buttons allow you add and arbitrarily change the size/shape and color of those shapes that you add to a topology."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/37.jpg")}),Object(i.b)("p",null,"(the square shape is just shown as an example, since the other two have similar options)."),Object(i.b)("p",null,"You can also right-click and duplicate those, like you can with text annotations:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/38.jpg")}),Object(i.b)("p",null,"Something to bear in mind, is that these shapes will initially be placed on a higher layer than devices already in the topology workspace, so they\u2019ll obscure devices already present:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/39.jpg")}),Object(i.b)("p",null,"Right-click on the object, and select \u201cLower one layer\u201d to place it on a layer lower than the device(s) in the topology:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/40.jpg")}),Object(i.b)("p",null,"Once you\u2019ve dropped these shapes down a couple of layers they become non-editable, so you\u2019ll need to raise them to higher layers to manipulate them further, or just delete them (accomplished by right-clicking on them, and choosing \u201cRaise one layer\u201d)."),Object(i.b)("p",null,"You can right-click on them just like a text box to get similar options, but you\u2019d choose \u201cStyle\u201d instead of text edit:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/41.jpg")}),Object(i.b)("p",null,"You can change the objects fill color, border color, border width, border type, and rotation. In the two below images, the fill color and border type of two squares have been changed, to indicate they\u2019re in different VLANs:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/42.jpg")}),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/43.jpg")}),Object(i.b)("p",null,"The final three buttons are pretty self explanatory.  The first magnifying glass (with the plus (+) sign) will zoom in the topology view:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/44.jpg")}),Object(i.b)("p",null,"The magnifying glass with glass with the minus ( - ) sign will zoom out the topology view:"),Object(i.b)("p",null,"The snapshot button (looks like a little camera) will take a image of the entire topology (not just the currently visible area), and save it in your default images folder. It will use the topology name for the filename by default, but you can change that:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/using-gns3/beginners/the-gns3-gui/45.jpg")}))}g.isMDXComponent=!0},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return p}));var o=n(0),s=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),b=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=b(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},h=s.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=b(n),h=o,p=g["".concat(a,".").concat(h)]||g[h]||u[h]||i;return n?s.a.createElement(p,r(r({ref:t},l),{},{components:n})):s.a.createElement(p,r({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var l=2;l<i;l++)a[l]=n[l];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},212:function(e,t,n){"use strict";var o=n(0),s=n(52);t.a=function(){return Object(o.useContext)(s.a)}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(76);var o=n(212),s=n(214);function i(e,t){var n=void 0===t?{}:t,i=n.forcePrependBaseUrl,a=void 0!==i&&i,r=n.absolute,c=void 0!==r&&r,l=Object(o.a)().siteConfig,b=(l=void 0===l?{}:l).baseUrl,g=void 0===b?"/":b,u=l.url;if(!e)return e;if(a)return g+e;if(!Object(s.a)(e))return e;var h=g+e.replace(/^\//,"");return c?u+h:h}},214:function(e,t,n){"use strict";function o(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return o}))}}]);