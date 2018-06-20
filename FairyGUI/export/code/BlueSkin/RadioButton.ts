/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlueSkin {

	export class RadioButton extends fairygui.GButton {

		public button:fairygui.Controller;
		public n1:fairygui.GImage;
		public n4:fairygui.GImage;
		public n3:fairygui.GImage;
		public title:fairygui.GTextField;

		public static URL:string = "ui://stv9j6m6raoc1b";

		public static createInstance():RadioButton {
			return <RadioButton><any>(fairygui.UIPackage.createObject("BlueSkin","RadioButton"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.n4 = <fairygui.GImage><any>(this.getChild("n4"));
			this.n3 = <fairygui.GImage><any>(this.getChild("n3"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
		}
	}
}