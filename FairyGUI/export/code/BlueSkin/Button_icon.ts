/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlueSkin {

	export class Button_icon extends fairygui.GButton {

		public button:fairygui.Controller;
		public n1:fairygui.GImage;
		public n5:fairygui.GImage;
		public n2:fairygui.GImage;
		public n3:fairygui.GImage;
		public icon:fairygui.GLoader;

		public static URL:string = "ui://stv9j6m6raoc1f";

		public static createInstance():Button_icon {
			return <Button_icon><any>(fairygui.UIPackage.createObject("BlueSkin","Button_icon"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.n5 = <fairygui.GImage><any>(this.getChild("n5"));
			this.n2 = <fairygui.GImage><any>(this.getChild("n2"));
			this.n3 = <fairygui.GImage><any>(this.getChild("n3"));
			this.icon = <fairygui.GLoader><any>(this.getChild("icon"));
		}
	}
}