/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlueSkin {

	export class ListItem extends fairygui.GButton {

		public button:fairygui.Controller;
		public n1:fairygui.GImage;
		public n2:fairygui.GImage;
		public title:fairygui.GTextField;

		public static URL:string = "ui://stv9j6m6raoc0";

		public static createInstance():ListItem {
			return <ListItem><any>(fairygui.UIPackage.createObject("BlueSkin","ListItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.n2 = <fairygui.GImage><any>(this.getChild("n2"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}