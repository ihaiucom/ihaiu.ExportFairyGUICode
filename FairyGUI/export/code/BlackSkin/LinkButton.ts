/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class LinkButton extends fairygui.GButton {

		public button:fairygui.Controller;
		public title:fairygui.GTextField;

		public static URL:string = "ui://s1yj9w6mp7th7";

		public static createInstance():LinkButton {
			return <LinkButton><any>(fairygui.UIPackage.createObject("BlackSkin","LinkButton"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}