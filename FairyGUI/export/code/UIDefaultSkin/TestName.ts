/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class TestName extends fairygui.GComponent {

		public a:ComButtonCheck;
		public a_2:ComButtonCheck;
		public a_3:ComLabel;

		public static URL:string = "ui://snq31xvrus714j";

		public static createInstance():TestName {
			return <TestName><any>(fairygui.UIPackage.createObject("UIDefaultSkin","TestName"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.a = <ComButtonCheck><any>(this.getChild("a"));
			this.a_2 = <ComButtonCheck><any>(this.getChild("a"));
			this.a_3 = <ComLabel><any>(this.getChild("a"));
		}
	}
}