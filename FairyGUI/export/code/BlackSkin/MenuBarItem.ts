/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class MenuBarItem extends fairygui.GButton {

		public button:fairygui.Controller;
		public n4:fairygui.GGraph;
		public n2:fairygui.GGraph;
		public title:fairygui.GTextField;

		public static URL:string = "ui://s1yj9w6mp7th2q";

		public static createInstance():MenuBarItem {
			return <MenuBarItem><any>(fairygui.UIPackage.createObject("BlackSkin","MenuBarItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n4 = <fairygui.GGraph><any>(this.getChild("n4"));
			this.n2 = <fairygui.GGraph><any>(this.getChild("n2"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}