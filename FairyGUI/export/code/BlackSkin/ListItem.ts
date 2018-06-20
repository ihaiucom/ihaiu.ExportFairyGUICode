/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class ListItem extends fairygui.GButton {

		public button:fairygui.Controller;
		public n0:fairygui.GImage;
		public n1:fairygui.GImage;
		public title:fairygui.GTextField;

		public static URL:string = "ui://s1yj9w6mp7th2n";

		public static createInstance():ListItem {
			return <ListItem><any>(fairygui.UIPackage.createObject("BlackSkin","ListItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}