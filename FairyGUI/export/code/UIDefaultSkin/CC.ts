/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class CC extends fairygui.GComponent {

		public img:fairygui.GImage;

		public static URL:string = "ui://snq31xvroett4h";

		public static createInstance():CC {
			return <CC><any>(fairygui.UIPackage.createObject("UIDefaultSkin","CC"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.img = <fairygui.GImage><any>(this.getChild("img"));
		}
	}
}