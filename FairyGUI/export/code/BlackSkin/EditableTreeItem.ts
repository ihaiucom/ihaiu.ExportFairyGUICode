/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class EditableTreeItem extends fairygui.GButton {

		public button:fairygui.Controller;
		public c1:fairygui.Controller;
		public n0:fairygui.GImage;
		public n1:fairygui.GImage;
		public title:fairygui.GTextField;
		public indent:fairygui.GGraph;
		public icon:fairygui.GLoader;
		public n8:fairygui.GImage;
		public input:fairygui.GTextInput;
		public n9:fairygui.GGroup;
		public expandButton:TreeExpandButton;
		public sign:fairygui.GLoader;

		public static URL:string = "ui://s1yj9w6mp7th3e";

		public static createInstance():EditableTreeItem {
			return <EditableTreeItem><any>(fairygui.UIPackage.createObject("BlackSkin","EditableTreeItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.c1 = this.getController("c1");
			this.n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
			this.indent = <fairygui.GGraph><any>(this.getChild("indent"));
			this.icon = <fairygui.GLoader><any>(this.getChild("icon"));
			this.n8 = <fairygui.GImage><any>(this.getChild("n8"));
			this.input = <fairygui.GTextInput><any>(this.getChild("input"));
			this.n9 = <fairygui.GGroup><any>(this.getChild("n9"));
			this.expandButton = <TreeExpandButton><any>(this.getChild("expandButton"));
			this.sign = <fairygui.GLoader><any>(this.getChild("sign"));
		}
	}
}