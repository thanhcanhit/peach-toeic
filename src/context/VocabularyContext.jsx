import React from "react";
import { createContext } from "react";

const data = [
	{
		id: 0,
		name: "abide by",
		pronounce: "ə'baid",
		explain: "to accept and act according to a law, an agreement",
		meaning: "(v): tôn trọng, tuân theo, giữ (lời)",
		example: {
			english: "The two parties agreed to abide by the judge's decision",
			vietnamse: "Hai bên đã đồng ý tuân theo quyết định của tòa án",
		},
		topic: "contracts",
	},
	{
		id: 1,
		name: "agreement",
		pronounce: "ə'gri:mənt",
		explain: "an arrangement, a promise or a contract made with somebody",
		meaning: "(n): hợp đồng, giao kèo, sự đồng ý/thỏa thuận với nhau",
		example: {
			english:
				"According to the agreement, the caterer will also supply the flowers for the event",
			vietnamse:
				"Theo như thỏa thuận, nhà cung cấp lương thực thực phẩm cũng sẽ cung cấp hoa cho sự kiện",
		},
		topic: "contracts",
	},
	{
		id: 2,
		name: "assurance",
		pronounce: "ə'ʃuərəns",
		explain:
			"a statement that something will certainly be true or will certainly happen",
		meaning: "(n): sự cam đoan, bảo đảm, chắc chắn; sự tin chắc, tự tin",
		example: {
			english:
				"The sales associate gave his assurance that the missing nameboard would be replaced the next day.",
			vietnamse:
				"Đối tác bán hàng cam đoan rằng ngày mai bàn phím lỗi sẽ được thay.",
		},
		topic: "contracts",
	},
	{
		id: 3,
		name: "cancellation",
		pronounce: ",kænse'leiʃn",
		explain:
			"a decision to stop something that has already been arranged from happening",
		meaning: "(n): sự bãi bỏ, hủy bỏ",
		example: {
			english:
				"The cancelation of her flight caused her problems for the rest of the week",
			vietnamse:
				"Việc hủy chuyến bay đã gây cho cô ấy nhiều vấn đề trong những ngày còn lại của tuần.",
		},
		topic: "contracts",
	},
	{
		id: 4,
		name: "determine",
		pronounce: "di'tə:min",
		explain: "to discover the facts about something",
		meaning: "(v): quyết định, xác định, định rõ; quyết tâm, kiên quyết",
		example: {
			english:
				"After reading the contract, I was still unable to detemine if our company was liable for back wages.",
			vietnamse:
				"Sau khi đọc hợp đồng, tôi vẫn không thể biết được liệu rằng công ty của chúng tôi có phải chịu trách nhiệm hoàn trả lại lương không",
		},
		topic: "contracts",
	},
	{
		id: 5,
		name: "engage",
		pronounce: "in'geidʤ",
		explain: "to become involved in, to participate",
		meaning: "(v) Tham gia, cam kết, (n) sự hứa hẹn, hứa hôn",
		example: {
			english:
				"He engaged us in a fascinating discussion about current business law",
			vietnamse:
				"Anh ấy cùng chúng tôi thảo luận sôi nổi về luật kinh doanh hiện hành",
		},
		topic: "contracts",
	},
	{
		id: 6,
		name: "establish",
		pronounce: "is'tæbliʃ",
		explain: "to start or create an organization, a system",
		meaning: "(v): thiết lập, thành lập; xác minh, chứng minh, củng cố",
		example: {
			english:
				"The merger of the two company established a powerful new corporation",
			vietnamse:
				"Sự liên kết giữa 2 công ty tạo nên một tập đoàn kinh tế hùng mạnh.",
		},
		topic: "contracts",
	},
	{
		id: 7,
		name: "obligate",
		pronounce: "'ɔbligeit",
		explain: "to bind legally or morally",
		meaning: "(v): bắt buộc, ép buộc",
		example: {
			english:
				"The contractor was obligated by the contract to work 40 hours a week.",
			vietnamse: "Nhà thầu buộc phải làm việc 40 tiếng mỗi tuần.",
		},
		topic: "contracts",
	},
	{
		id: 8,
		name: "party",
		pronounce: "'pɑ:ti",
		explain:
			"one of the people or groups of people involved in a legal agreemen",
		meaning:
			"(n): đảng, phái, đội, nhóm; người tham dự/tham gia; buổi liên hoan, buổi tiệc",
		example: {
			english:
				"The parties agreed to settlement in their contract dispute.",
			vietnamse:
				"Các bên đã nhất trí đi đến một thỏa thuận trong hợp đồng gây tranh cãi của họ.",
		},
		topic: "contracts",
	},
	{
		id: 9,
		name: "provision",
		pronounce: "provision",
		explain: "a condition or an arrangement in a legal document",
		meaning: "(n): sự dự liệu, dự trữ, dự phòng, cung cấp; điều khoản",
		example: {
			english:
				"The father made provision for his children through his will.",
			vietnamse:
				"Người cha đã truyền lại di chúc cho những đứa con của mình.",
		},
		topic: "contracts",
	},
	{
		id: 10,
		name: "resolve",
		pronounce: "ri'zɔlv",
		explain: "to find an acceptable solution to a problem",
		meaning: "(v) giải quyết, (n) sự kiên quyết / sự tin chắc",
		example: {
			english:
				"The manager resolved to clean out all the files at the end of the week.",
			vietnamse:
				"Cuối tuần, người quản lý đã quyết định xóa sạch tất cả các dữ liệu",
		},
		topic: "contracts",
	},
	{
		id: 11,
		name: "specific",
		pronounce: "spi'sifik",
		explain: "detailed abd exact",
		meaning: "(adj): riêng biệt, cụ thể, đặc trưng; rõ ràng, rành mạch",
		example: {
			english:
				"The customer's specific complaint was not addressed in his e-mail.",
			vietnamse:
				"Khiếu nại cụ thể của khách hàng đã không được giải quyết trong Email gửi anh ấy.",
		},
		topic: "contracts",
	},
	{
		id: 12,
		name: "attract",
		pronounce: "ə'trækt",
		explain: "to draw by appeal",
		meaning: "(v): hấp dẫn, lôi cuốn, thu hút",
		example: {
			english:
				"The display attracted a number of people at the convention",
			vietnamse:
				"Việc trưng bày đã thu hút được một số người tại hội nghị",
		},
		topic: "marketing",
	},
	{
		id: 13,
		name: "compare",
		pronounce: "kəm'peə",
		explain:
			"to examine people or things to see how they are similar and how they are different",
		meaning: "(v): so sánh, đối chiếu",
		example: {
			english:
				"Once the customer compared the two products, her choice was easy.",
			vietnamse:
				"Khi mà người khách hàng được so sánh 2 sản phẩm, sự lựa chọn của cô ta sẽ dễ dàng hơn.",
		},
		topic: "marketing",
	},
	{
		id: 14,
		name: "competition",
		pronounce: ",kɔmpi'tiʃn",
		explain:
			"a situation in which people or organizations compete with each other for something that not everyone can have",
		meaning: "(v): ‹sự/cuộc› cạnh tranh, tranh giành, thi đấu",
		example: {
			english:
				"In the competition for afternoon dinners, Hector's has come out on top",
			vietnamse:
				"Trong cuộc thi của các quán ăn chiều, của hàng Hector đã được xếp hạng nhất.",
		},
		topic: "marketing",
	},
	{
		id: 15,
		name: "consume",
		pronounce: "kən'sju:m",
		explain: "to use something, especially fuel, engery or time",
		meaning: "(v): tiêu thụ, tiêu dùng",
		example: {
			english:
				"The printer consumes more toner than the downstairs printer",
			vietnamse:
				"Cái máy in ngốn nhiều ống mực hơn là cái máy in ở dưới nhà",
		},
		topic: "marketing",
	},
	{
		id: 16,
		name: "convince",
		pronounce: "kən'sju:m",
		explain: "to make somebody / yourselft believe that something is true",
		meaning: "(v): Thuyết phục",
		example: {
			english: "He convinced me that he was right.",
			vietnamse: "Anh ấy đã thuyết phục tôi rằng anh ấy đã đúng.",
		},
		topic: "marketing",
	},
	{
		id: 17,
		name: "currently",
		pronounce: "ˈkʌrəntli",
		explain: "at the present time",
		meaning: "(adv): hiện thời, hiện nay, lúc này",
		example: {
			english:
				"Currently, customers are demanding big discounts for bulk orders",
			vietnamse:
				"Hiện nay, khách hàng đang đòi hỏi những khoản giảm giá nhiều cho những đơn hàng lớn",
		},
		topic: "marketing",
	},
	{
		id: 18,
		name: "fad",
		pronounce: "fæd",
		explain:
			"something that people are interested in for only a short period of time.",
		meaning: "(n): mốt nhất thời, sự thích thú tạm thời; dở hơi, gàn dở",
		example: {
			english:
				"The mini dress was a fad once thought to be finished, but now it is making a comeback",
			vietnamse:
				"Váy ngắn là mốt tạm thời mỗi khi ý tưởng bị hết, nhưng hiện giờ nó đang quay trở lại",
		},
		topic: "marketing",
	},
	{
		id: 19,
		name: "inspiration",
		pronounce: ",inspə'reiʃn",
		explain: "a thing or person that arouses a feeling",
		meaning: "(n): ‹sự/người/vật› truyền cảm hứng, gây cảm hứng",
		example: {
			english: "His work is an inspiration to the marketing department.",
			vietnamse:
				"Công việc của anh ta là một nguồn cảm hứng cho bộ phận tiếp thị",
		},
		topic: "marketing",
	},
	{
		id: 20,
		name: "market",
		pronounce: "'mɑ:kit",
		explain: "to advertise and offer a product for sale",
		meaning: "(v): thị trường, chợ, nơi mua bán sản phẩm...",
		example: {
			english:
				"The market for brightly colored clothing was brisk last year, but it's moving sluggishly this year",
			vietnamse:
				"Thị trường của trang phục màu sắc sặc sỡ rất phát đạt vào năm ngoái, nhưng nó lại chuyển động uể oải trong năm nay",
		},
		topic: "marketing",
	},
	{
		id: 21,
		name: "persuasion",
		pronounce: "pə'sweiʤn",
		explain: "the power to influence, a deep conviction or belief.",
		meaning:
			"(n): ‹sự› thuyết phục, làm cho tin (chú ý: persuade > convince)",
		example: {
			english:
				"The seminar teaches techniques of persuasion to increase sales.",
			vietnamse:
				"Hội thảo giảng dạy những kỹ thuật thuyết phục để gia tăng doanh số",
		},
		topic: "marketing",
	},
	{
		id: 22,
		name: "productive",
		pronounce: "prəˈdʌktɪv",
		explain: "making goods or growing crops.",
		meaning: "(adj): sản xuất, sinh sản; sinh lợi nhiều, có hiệu quả",
		example: {
			english:
				"The unproductive sales meeting brought many staff complaints",
			vietnamse:
				"Hội nghị kinh doanh phi lợi nhuận đã làm cho nhiều nhân viên phàn nàn",
		},
		topic: "marketing",
	},
	{
		id: 23,
		name: "satisfaction",
		pronounce: ",sætis'fækʃn",
		explain:
			"the good feeling that you have when you have achieved something",
		meaning: "(n): sự làm thỏa mãn, sự hài lòng",
		example: {
			english:
				"Your satisfaction is guaranteed or you'll get your money back.",
			vietnamse:
				"Sự hài lòng của bạn được bảo đảm, hoặc là bạn sẽ được nhận lại tiền của mình",
		},
		topic: "marketing",
	},
	{
		id: 24,
		name: "characteristic",
		pronounce: ",kæriktə'ristik",
		explain: "very typical of something or of somebody's character.",
		meaning:
			"(adj, n): (adj) đặc thù, (n) đặc trưng, đặc điểm, đặc thù, cá biệt",
		example: {
			english:
				"One characteristic of the store is that it is slow in mailing refund checks.",
			vietnamse:
				"Một đặc điểm của cửa hàng là nó chậm chạp trong việc gửi hóa đơn hoàn trả",
		},
		topic: "warranties",
	},
	{
		id: 25,
		name: "consequence",
		pronounce: "'kɔnsikwəns",
		explain: "a result of something that has happened",
		meaning:
			"(n): kết quả, hậu quả, hệ quả; tầm quan trọng, tính trọng đại",
		example: {
			english:
				"As a consequence of not having seen a dentist for several years, Lydia had several cavities.",
			vietnamse:
				"Là hậu quả của việc không đi khám nha sĩ trong vài năm, Lydia đã bị vài răng sâu rỗng",
		},
		topic: "warranties",
	},
	{
		id: 26,
		name: "consider",
		pronounce: "kən'sidə",
		explain: "to think about something carefully",
		meaning:
			"(v): cân nhắc, suy xét, suy nghĩ (một cách cẩn thận); lưu ý, quan tâm",
		example: {
			english:
				"After considering all the options, Della decided to buy a used car",
			vietnamse:
				"Sau khi cân nhắc tất cả sự chọn lựa, Della đã quyết định mua chiếc xe cũ",
		},
		topic: "warranties",
	},
	{
		id: 27,
		name: "cover",
		pronounce: "'kʌvə",
		explain: "to include something; to deal with something",
		meaning: "(v): che, phủ, trùm, bọc; bao gồm",
		example: {
			english: "Will my medical insurance cover this surgery?",
			vietnamse:
				"Hợp đồng bảo hiểm y tế của tôi liệu có bao gồm cho ca phẫu thuật này không?",
		},
		topic: "warranties",
	},
	{
		id: 28,
		name: "expiration",
		pronounce: ",ekspaiə'reiʃn",
		explain:
			"an ending of the period of time when an official document can be used",
		meaning: "(n): sự mãn hạn, sự hết hạn, sự kết thúc",
		example: {
			english: "Have you checked the expriration date on this yogurt?",
			vietnamse: "Anh đã kiểm tra hạn sử dụng của món sữa chua này chưa?",
		},
		topic: "warranties",
	},
	{
		id: 29,
		name: "frequently",
		pronounce: "ˈfriːkwəntli",
		explain: "often",
		meaning: "(adv): thường xuyên, một cách thường xuyên",
		example: {
			english: "Appliances frequently come with a one-year warranty",
			vietnamse: "Trang thiết bị thường có bảo hành một năm",
		},
		topic: "warranties",
	},
	{
		id: 30,
		name: "imply",
		pronounce: "im'plai",
		explain: "to suggest that something is true without saying so directly",
		meaning: "(v): ngụ ý, hàm ý, ẩn ý, ý nói",
		example: {
			english:
				"The guarantee on the Walkman implied that all damages were covered under warranty for one year",
			vietnamse:
				"Giấy bảo đảm theo máy nghe nhạc Walkman đã ngụ ý rằng mọi hư hỏng đều được bao gồm trong thời hạn bảo hành là 1 năm",
		},
		topic: "warranties",
	},
	{
		id: 31,
		name: "promise",
		pronounce: "promise",
		explain:
			"to tell somebody that you will definitely do or not do something",
		meaning: "(v): (n) hứa hẹn, cam đoan, bảo đảm; (v) hứa",
		example: {
			english:
				"The sales associate promised that our new mattress would arrive by noon on Saturday",
			vietnamse:
				"Người cộng tác kinh doanh hứa rằng tấm nệm mới của chúng ta sẽ đến trước trưa thứ Bảy",
		},
		topic: "warranties",
	},
	{
		id: 32,
		name: "protect",
		pronounce: "protect",
		explain:
			"to make sure that somebody / something is not harmed, injured",
		meaning: "(v): bảo vệ, bảo hộ, che chở",
		example: {
			english:
				"Consumer laws are designed to protect the public against unscrupulous vendors",
			vietnamse:
				"Luật tiêu dùng được thiết kế để bảo vệ công chúng trước những kẻ bán hàng vô lương tâm",
		},
		topic: "warranties",
	},
	{
		id: 33,
		name: "reputation",
		pronounce: ",repju:'teiʃn",
		explain:
			"the opinion that people have about what s.b/s.th is like, based on what has happened in the past",
		meaning: "(n): danh tiếng, thanh danh, tiếng (tốt của nhân vật)",
		example: {
			english:
				"The company knew that the reputation of its products was the most important asset it had",
			vietnamse:
				"Công ty biết rằng tiếng tăm sản phẩm của họ là thứ tài sản quan trọng nhất mà họ có",
		},
		topic: "warranties",
	},
	{
		id: 34,
		name: "require",
		pronounce: "ri'kwaiə",
		explain: "to need something; to depend on s.b / s.th",
		meaning: "(v): đòi hỏi, yêu cầu, cần phải",
		example: {
			english:
				"The law requires that each item clearly display the warranty information",
			vietnamse:
				"Luật pháp yêu cầu mỗi món hàng trình bày rõ ràng thông tin về bảo hành",
		},
		topic: "warranties",
	},
	{
		id: 35,
		name: "variety",
		pronounce: "və'raiəti",
		explain: "different sorts of the same thing",
		meaning: "(n): đa dạng, nhiều thứ/loại/vẻ khác nhau",
		example: {
			english:
				"There's a variety of standard terms that you'll find in warranties",
			vietnamse:
				"Có nhiều điều khoản tiêu chuẩn mà bạn sẽ thấy ở trong các phiếu bảo hành",
		},
		topic: "warranties",
	},
	{
		id: 36,
		name: "address",
		pronounce: "ə'dres",
		explain: "a formal speech that í made in front of an audience",
		meaning:
			"(n,v): (n) địa chỉ, diễn văn, bài nói chuyện, tác phong nói chuyện, sự khôn khéo; (v) trình bày",
		example: {
			english:
				"Marco's business plan addresses the needs of small business owners",
			vietnamse:
				"Kế hoạch kinh doanh của Marco nhằm vào nhu cầu của những chủ doanh nghiệp nhỏ",
		},
		topic: "business planning",
	},
	{
		id: 37,
		name: "avoid",
		pronounce: "ə'vɔid",
		explain: "to prevent something bad from happening",
		meaning: "(v): tránh, tránh khỏi; hủy bỏ, bác bỏ",
		example: {
			english:
				"To avoid going out of business, owners should prepare a proper business plan",
			vietnamse:
				"Nhằm tránh lụn bại việc làm ăn, những người chủ nên chuẩn bị một kế hoạch KD phù hợp",
		},
		topic: "business planning",
	},
	{
		id: 38,
		name: "demonstrate",
		pronounce: "'demənstreit",
		explain: "to show something clearly by giving proof or evidence",
		meaning: "(v): bày tỏ, biểu lộ, cho thấy; chứng minh, giải thích",
		example: {
			english:
				"The professor demonstrated through a case study that a business plan can impress a lender",
			vietnamse:
				"Vị giáo sư đã chứng minh thông qua bài học tình huống là một kế hoạch kinh doanh có thể gây ấn tượng với một người cho vay",
		},
		topic: "business planning",
	},
	{
		id: 39,
		name: "develop",
		pronounce: "di'veləp",
		explain: "to gradually grow or become bigger, more advanced",
		meaning: "(v): phát triển, tiến triển, triển khai, mở rộng",
		example: {
			english:
				"Lily developed her ideas into a business plan by taking a class at the community college",
			vietnamse:
				"Lily đã phát triển ý tưởng của cô ta vào kế hoạch kinh doanh bằng cách tham dự một lớp học tại trường cao đẳng cộng đồng",
		},
		topic: "business planning",
	},
	{
		id: 40,
		name: "evaluate",
		pronounce: "i'væljueit",
		explain: "to form an opinion of amount, value or quality of something",
		meaning: "(v): đánh giá, định giá; ước lượng",
		example: {
			english:
				"It's important to evaluate your competition when making a business plan",
			vietnamse:
				"Đánh giá sức cạnh tranh của bạn là việc quan trọng khi lập một kế hoạch kinh doanh",
		},
		topic: "business planning",
	},
	{
		id: 41,
		name: "gather",
		pronounce: "'gæðə",
		explain: "to come together, or bring people together",
		meaning: "(v): tập hợp, tụ thập, thu thập; kết luận, suy ra",
		example: {
			english: "We gathered information for our plan from many sources",
			vietnamse:
				"Chúng tôi thu thập thông tin cho bản kế hoạch của mình từ nhiều nguồn",
		},
		topic: "business planning",
	},
	{
		id: 42,
		name: "offer",
		pronounce: "'ɔfə",
		explain: "to say that you are willing to do something for somebody",
		meaning:
			"(n,v): (n) đề xuất, đề nghị, chào mời, chào hàng, dạm, hỏi, ướm; (v) đề nghị",
		example: {
			english: "Devon accepted our offer to write the business plan",
			vietnamse:
				"Devon đã chuấp thuận đề nghị của chúng tôi để viết một bản kế hoạch kinh doanh",
		},
		topic: "business planning",
	},
	{
		id: 43,
		name: "primarily",
		pronounce: "'praimərili",
		explain: "mainly",
		meaning: "(adv): trước hết, đầu tiên; chính, chủ yếu, quan trọng nhất",
		example: {
			english:
				"The developers are thinking primarily of how to enter the South American market",
			vietnamse:
				"Những nhà phát triển quan tâm nhất đến việc làm sao để xâm nhập thị trường Nam Mỹ",
		},
		topic: "business planning",
	},
	{
		id: 44,
		name: "risk",
		pronounce: "rɪsk",
		explain:
			"the possibility of something bad happening at some time in the future",
		meaning: "(n): nguy cơ, sự nguy hiểm, sự rủi ro",
		example: {
			english:
				"The primary risk for most start-up businesses is insufficient capital",
			vietnamse:
				"Nguy cơ lớn nhất đối với hầu hết các cuộc khởi nghiệp là thiếu vốn",
		},
		topic: "business planning",
	},
	{
		id: 45,
		name: "strategy",
		pronounce: "ˈstrætədʒi",
		explain: "a plan that is intended to achieve a particular purpose",
		meaning: "(n): chiến lược, sự vạch kế hoạch hành động",
		example: {
			english:
				"A business plan is a strategy for running a business and avoiding problems",
			vietnamse:
				"Một kế hoạch kinh doanh là một chiến lược để vận hành công việc và tránh các rắc rối",
		},
		topic: "business planning",
	},
	{
		id: 46,
		name: "strong",
		pronounce: "strɔɳ",
		explain: "having a lot of physical power",
		meaning:
			"(adj): khỏe, mạnh, tốt, bền, kiên cố; đanh thép, kiên quyết; sôi nổi, nhiệt tình...",
		example: {
			english:
				"The professor made a strong argument for the value of a good business plan",
			vietnamse:
				"Vị giáo sư đã gây ra một cuộc tranh luận sôi nổi về giá trị của một kế hoạch KD tốt",
		},
		topic: "business planning",
	},
	{
		id: 47,
		name: "substitution",
		pronounce: ",sʌbsti'tju:ʃn",
		explain: "to take the place of somebody / something else",
		meaning: "(n): sự đổi, sự thay thế",
		example: {
			english:
				"Your substitution of fake names for real ones makes the document seem insincere",
			vietnamse:
				"Việc anh lấy tên giả thay cho tên thật khiến cho tài liệu có vẻ như không thành thật",
		},
		topic: "business planning",
	},
	{
		id: 48,
		name: "accommodate",
		pronounce: "ə'kɔmədeit",
		explain:
			"to provide somebody with a room or place to sleep, live or sit",
		meaning: "(v): điều tiết, điều chỉnh, thu xếp, làm cho phù hợp",
		example: {
			english:
				"The meeting room was large enough to accommodate the various needs of the groups using it",
			vietnamse:
				"Phòng họp đủ lớn để phù hợp với nhiều nhu cầu khác nhau của các nhóm sử dụng nó",
		},
		topic: "conferences",
	},
	{
		id: 49,
		name: "arrangement",
		pronounce: "ə'reindʤmənt",
		explain: "a plan or preparation that you make so that something",
		meaning: "(n): ‹sự› thu xếp, dàn xếp, sắp xếp, sắp đặt",
		example: {
			english:
				"The travel arrangements were taken care of by Sara, Mr. Billing's capable assistant",
			vietnamse:
				"Việc thu xếp chuyến đi được chịu trách nhiệm bởi Sara, trợ lý có năng lực của ông Billing",
		},
		topic: "conferences",
	},
	{
		id: 50,
		name: "association",
		pronounce: "ə,sousi'eiʃn",
		explain:
			"an officcial group of people who have joined together for a particular purpose",
		meaning:
			"(n): hội, hội liên hiệp, đoàn thể; ‹sự› kết hợp, liên kết, liên hợp",
		example: {
			english:
				"Local telephone companies formed an association to serve common goals, meet their common needs, and improve efficiency",
			vietnamse:
				"Các công ty điện thoại địa phương thành lập một hội liên hiệp để phục vụ các mục đích chung, đáp ứng các nhu cầu chung của họ và",
		},
		topic: "conferences",
	},
	{
		id: 51,
		name: "attend",
		pronounce: "ə'tend",
		explain: "to be present at an even",
		meaning:
			"(v): tham dự, có mặt; chăm sóc, phục vụ; đi theo, đi kèm, hộ tống",
		example: {
			english:
				"We expect more than 100 members to attend the annual meeting",
			vietnamse:
				"Chúng tôi hy vọng hơn 100 thành viên đến tham dự cuộc họp thường niên",
		},
		topic: "conferences",
	},
	{
		id: 52,
		name: "get in touch",
		pronounce: "NA",
		explain: "to communicate / contact with somebody",
		meaning:
			"(v): liên lạc với, tiếp xúc với, giữ quan hệ với, có dính líu đến",
		example: {
			english:
				"As soon as we arrive at the hotel, we will get in touch with the manager about the unexpected guests",
			vietnamse:
				"Ngay khi chúng tôi đến khách sạn, chúng tôi sẽ liên hệ với giám đốc về những vị khách không mời mà đến",
		},
		topic: "conferences",
	},
	{
		id: 53,
		name: "hold",
		pronounce: "hould",
		explain: "to have a meeting",
		meaning: "(v): cầm, nắm, giữ; chứa, đựng; tổ chức, tiến hành",
		example: {
			english: "This meeting room holds at least 80 people comfortably",
			vietnamse: "Phòng họp này chứa được thoải mái ít nhất 80 người",
		},
		topic: "conferences",
	},
	{
		id: 54,
		name: "location",
		pronounce: "lou'keiʃn",
		explain: "a place where something happens or exists",
		meaning: "(n): vị trí, khu đất, hiện trường",
		example: {
			english:
				"The location of the meeting was changed from the Red Room to the Green Room",
			vietnamse:
				"Vị trí họp đã được thay đổi từ phòng Đỏ sang phòng Xanh",
		},
		topic: "conferences",
	},
	{
		id: 55,
		name: "overcrowded",
		pronounce: "əʊvəˈkraʊdɪd",
		explain: "with too many people or things",
		meaning: "(adj): chật ních, đông nghịt",
		example: {
			english:
				"Too many poor people are living in overcrowded conditions",
			vietnamse:
				"Có quá nhiều người nghèo đang sống trong điều kiện chật chội",
		},
		topic: "conferences",
	},
	{
		id: 56,
		name: "register",
		pronounce: "'redʤistə",
		explain:
			"to record your/ somebody / something name on an official list",
		meaning: "(n, v): (n) danh sách, sổ, sổ sách; (v) đăng ký",
		example: {
			english:
				"According to the register, more than 250 people attended the afternoon seminar",
			vietnamse:
				"Theo sổ đăng ký, đã có hơn 250 người tham dự buổi hội thảo chiều",
		},
		topic: "conferences",
	},
	{
		id: 57,
		name: "select",
		pronounce: "si'lekt",
		explain: "to choose somebody / something from a group",
		meaning: "(v): chọn lựa, chọn lọc, tuyển chọn",
		example: {
			english: "The winners were a select group",
			vietnamse:
				"Những người chiến thắng là một nhóm có chọn lọc (nhóm dành riêng)",
		},
		topic: "conferences",
	},
	{
		id: 58,
		name: "session",
		pronounce: "'seʃn",
		explain: "a period of time that is spent doing a particular activity",
		meaning: "(n): phiên, kỳ, buổi (họp, học)",
		example: {
			english:
				"The morning sessions tend to fill up first, so sign up early",
			vietnamse:
				"Các phiên họp sáng có khuynh hướng kín chỗ trước hết, vì vậy hãy đăng ký sớm",
		},
		topic: "conferences",
	},
	{
		id: 59,
		name: "take part in",
		pronounce: "NA",
		explain: "to be involved in something",
		meaning: "(v): tham dự, tham gia",
		example: {
			english:
				"We could not get enough people to take part in the meeting, so we canceled it",
			vietnamse:
				"Chúng tôi không có đủ người tham dự cuộc họp, vì vậy chúng tôi hủy bỏ nó",
		},
		topic: "conferences",
	},
	{
		id: 60,
		name: "access",
		pronounce: "ˈækses",
		explain: "the opportunity or right to use something",
		meaning:
			"(n, v): (n) lối vào, đường vào, sự/quyền truy cập; (v) truy cập",
		example: {
			english:
				"You can't gain access to the files unless you know the password",
			vietnamse:
				"Anh không có được quyền truy cập file trừ phi anh biết mật khẩu",
		},
		topic: "Computers & the Internet",
	},
	{
		id: 61,
		name: "allocate ",
		pronounce: "ˈæləkeɪt",
		explain:
			"to give something officially to somebody / something for a particular purpose",
		meaning:
			"(v): cấp cho, phân phối, phân phát, chia phần; chỉ định, định rõ vị trí",
		example: {
			english:
				"The office manager did not allocate enough money to purchase software",
			vietnamse:
				"Người quản lý văn phòng không cấp đủ tiền để mua sắm phần mềm",
		},
		topic: "Computers & the Internet",
	},
	{
		id: 62,
		name: "compatible",
		pronounce: "kəm'pætəbl",
		explain: "able to be used together",
		meaning:
			"(adj): tương thích, tương hợp, hợp nhau, có thể dùng được với nhau",
		example: {
			english:
				"This operating system is not compatible with this model computer",
			vietnamse: "Hệ điều hành không tương thích với kiểu máy tính này",
		},
		topic: "Computers & the Internet",
	},
	{
		id: 63,
		name: "delete",
		pronounce: "di'li:t",
		explain: "to remove something that has been written or printed",
		meaning: "(v): xóa đi, bỏ đi, gạch đi (to remove, to erase)",
		example: {
			english:
				"The technicians deleted all the data on the disk accidentally",
			vietnamse: "Kỹ thuật viên đã vô tình xóa mọi dữ liệu trên đĩa",
		},
		topic: "Computers & the Internet",
	},
	{
		id: 64,
		name: "display",
		pronounce: "dis'plei",
		explain: "to put something in a place where people can see it easily",
		meaning:
			"(v, n): (v) hiển thị, biểu lộ, phô bày, trình bày, trưng bày; (n) sự trưng bày",
		example: {
			english:
				"The accounting program displays a current balance when opened.",
			vietnamse:
				"Chương trình kế toán hiển thị một con số cân bằng thu chi khi mở (chương trình đó) ra",
		},
		topic: "Computers & the Internet",
	},
	{
		id: 65,
		name: "duplicate",
		pronounce: "'dju:plikit",
		explain: "to make an extract copy of something",
		meaning: "(v): sao lại, làm thành 2 bản, gấp đôi, nhân đôi",
		example: {
			english:
				"I think the new word processing program will duplicate the success of the one introduced last year",
			vietnamse:
				"Tôi nghĩ rằng chương trình xử lý văn bản mới sẽ thành công gấp đôi so với chương trình được giới thiệu hồi năm ngoái",
		},
		topic: "Computers & the Internet",
	},
	{
		id: 66,
		name: "failure",
		pronounce: "'feiljə",
		explain: "lack of success in doing or achieving something",
		meaning: "(n): hỏng, thiếu, yếu, trượt, thất bại, bất thành",
		example: {
			english:
				"Your failure to inform us about the changed password cost the company a day's work",
			vietnamse:
				"Anh không thông báo cho chúng tôi về mật khẩu bị đổi đã làm tốn công ty 1 ngày làm việc",
		},
		topic: "Computers & the Internet",
	},
	{
		id: 67,
		name: "figure out",
		pronounce: "ˈfɪɡə/ /aʊt",
		explain: "to calculate an amount or the cost",
		meaning: "(v): tìm hiểu, đoán ra, tính toán ra, giải ra",
		example: {
			english:
				"By examining all of the errors, the technicians figured out how to fix the problem",
			vietnamse:
				"Bằng cách xem xét mọi lỗi, các kỹ thuật viên đã tìm ra các để sửa chữa các sự cố",
		},
		topic: "Computers & the Internet",
	},
	{
		id: 68,
		name: "ignore",
		pronounce: "ig'nɔ:",
		explain: "to pay no attention to something",
		meaning: "(v): bỏ qua, phớt lờ, không để ý tới",
		example: {
			english:
				"He ignored all the 'No Smoking' signs and lit up a cigarette",
			vietnamse: "Anh ấy phớt lờ bảng cấm hút thuốc để hút 1 điểu thuốc",
		},
		topic: "Computers & the Internet",
	},
	{
		id: 69,
		name: "search",
		pronounce: "sə:tʃ",
		explain:
			"an attemp to find somebody / something, especially by looking acrefully for them /it",
		meaning: "(n, v): (n) tìm kiếm, tìm hiểu; điều tra, thăm dò; (v) tìm",
		example: {
			english:
				"Our search of the database produced very little information",
			vietnamse:
				"Việc tìm kiếm trong cơ sở dữ liệu của chúng tôi đã đem lại rất ít thông tin",
		},
		topic: "Computers & the Internet",
	},
	{
		id: 70,
		name: "shut down",
		pronounce: "ʃʌt/ /daʊn",
		explain: "it stops being often for bussiness",
		meaning: "(v): đóng lại, ngừng lại; tắt máy, ngừng hoạt động, chấm dứt",
		example: {
			english: "Please shut down the computer before you leave",
			vietnamse: "Vui lòng tắt máy trước khi bạn ngừng làm việc",
		},
		topic: "Computers & the Internet",
	},
	{
		id: 71,
		name: "warning",
		pronounce: "'wɔ:niɳ",
		explain:
			"a statement, an event, etc. telling somebody that something bad or unpleasant",
		meaning:
			"(n): ‹sự/lời› cảnh báo, báo trước (có nguy hiểm hoặc gặp vấn đề rắc rối)",
		example: {
			english:
				"The red flashing light gives a warning to users that the battery is low",
			vietnamse:
				"Ánh sáng nhấp nháy màu đỏ đưa ra sự cảnh báo với người dùng rằng pin bị cạn",
		},
		topic: "Computers & the Internet",
	},
	{
		id: 72,
		name: "affordable",
		pronounce: "əˈfɔːd",
		explain: "cheap enough for most people to buy",
		meaning:
			"(adj): có đủ khả năng, có đủ điều kiện (sức lực/thời gian/tiền bạc)",
		example: {
			english:
				"The company's first priority was to find an affordable phone system",
			vietnamse:
				"Ưu tiên trước hết của công ty là tìm một hệ thống điện thoại có đủ khả năng (hoạt động)",
		},
		topic: "office technology",
	},
	{
		id: 73,
		name: "as needed",
		pronounce: "NA",
		explain: "In need",
		meaning: "(adv): khi cần, lúc cần, cần thiết",
		example: {
			english:
				"The service contract states that repairs will be made on an as-needed basis",
			vietnamse:
				"Hợp đồng dịch vụ nói rằng việc sửa chữa sẽ được thực hiện dựa trên cơ sở mỗi khi cần",
		},
		topic: "office technology",
	},
	{
		id: 74,
		name: "be in charge of",
		pronounce: "NA",
		explain: "be responsible for",
		meaning: "(v): chịu trách nhiệm về; đang điều khiển, đang chỉ huy",
		example: {
			english:
				"He appointed someone to be in charge of maintaining a supply of paper in the fax machine",
			vietnamse:
				"Ông ấy chọn người nào đó chịu trách nhiệm duy trì việc cung cấp giấy cho máy fax",
		},
		topic: "office technology",
	},
	{
		id: 75,
		name: "capacity",
		pronounce: "kə'pæsit",
		explain:
			"the number of things or people that a container or space can hold",
		meaning:
			"(n): sức chứa, dung tích, khả năng chứa đựng; khả năng, năng lực",
		example: {
			english:
				"The new conference room is much larger and has a capacity of one hundred people",
			vietnamse:
				"Phòng họp mới thì lớn hơn nhiều (phòng cũ) và có khả năng chứa được một trăm người",
		},
		topic: "office technology",
	},
	{
		id: 76,
		name: "durable ",
		pronounce: "ˈdjʊərəbl",
		explain: "likely to last for a long time",
		meaning: "(adj): bền, lâu, lâu bền",
		example: {
			english:
				"These chairs are more durable than the first ones we looked at",
			vietnamse:
				"Những cái ghế này bền hơn nhiều những cái ghế đầu tiên mà chúng ta đã thấy",
		},
		topic: "office technology",
	},
	{
		id: 77,
		name: "initiative ",
		pronounce: "i'niʃiətiv",
		explain:
			"the ability to decide and act on your own without waiting for somebody to tell you what to do",
		meaning: "(n): bắt đầu, khởi đầu, khởi xướng",
		example: {
			english:
				"Employees are encouraged to take the initiative and share their ideas with management.",
			vietnamse:
				"Nhân viên được khuyến khích đi đầu và chia sẻ ý tưởng của họ với ban quản lý",
		},
		topic: "office technology",
	},
	{
		id: 78,
		name: "physically ",
		pronounce: "ˈfɪzɪkli",
		explain:
			"in a way that is connected with a person's body rather than their mind",
		meaning:
			"(adv): về thân thể/cơ thể/thể chất; theo quy luật tự nhiên, một cách vật lý",
		example: {
			english: "The computer screen is making her physically sick.",
			vietnamse:
				"Màn hình máy tính khiến cho cô ta khó chịu về mặt thể chất",
		},
		topic: "office technology",
	},
	{
		id: 79,
		name: "provider",
		pronounce: "provider",
		explain:
			"a person or an organization that supplies somebody with something they need",
		meaning: "(n): người cung cấp, nhà cung cấp (supplier)",
		example: {
			english:
				"The deparment was extremely pleased with the service they received from the phone provide.",
			vietnamse:
				"Bộ phận hết sức hài lòng với dịch vụ mà họ nhận được từ nhà cung cấp dịch vụ điện thoại",
		},
		topic: "office technology",
	},
	{
		id: 80,
		name: "recur",
		pronounce: "ri'kə:",
		explain: "to happen again",
		meaning: "(v): lặp lại, diễn lại, tái diễn, tái phát; lặp đi lặp lại",
		example: {
			english: "The managers did not want that particular error to recur",
			vietnamse:
				"Các trưởng phòng không muốn những lỗi cá biệt đó lại tái diễn",
		},
		topic: "office technology",
	},
	{
		id: 81,
		name: "reduction",
		pronounce: "ri'dʌkʃn",
		explain: "an act of making something less or smaller",
		meaning: "(n): ‹sự› giảm, hạ, thu nhỏ, hạ thấp (lessening, decrease)",
		example: {
			english:
				"The outlet store gave a 20 percent reduction in the price of the shelves and bookcases",
			vietnamse:
				"Cửa hàng tiêu thụ đã giảm giá 20% với các kệ sách và tủ sách",
		},
		topic: "office technology",
	},
	{
		id: 82,
		name: "stay on top of",
		pronounce: "NA",
		explain: "Have the newest informatiion",
		meaning:
			"(v): nắm bắt tình hình (đang xảy ra), hiểu biết thông tin mới nhất",
		example: {
			english:
				"In this industry, you must stay on top of current developments",
			vietnamse:
				"Trong ngành công nghiệp này, anh phải nắm bắt được tình hình về các diễn biến hiện tại",
		},
		topic: "office technology",
	},
	{
		id: 83,
		name: "stock",
		pronounce: "stɒk",
		explain: "a supply of goods that is available for sale",
		meaning: "(v, n): kho/hàng dự trữ; vốn, cổ phần",
		example: {
			english: "The employees stocked the shelves on a weekly basis",
			vietnamse: "Các nhân viên trữ hàng lên kệ căn cứ theo mỗi tuần",
		},
		topic: "office technology",
	},
	{
		id: 84,
		name: "appreciation ",
		pronounce: "ə,pri:ʃi'eiʃn",
		explain: "pleasure that you have when you recognize good qualities",
		meaning:
			"(n): ‹sự› đánh giá, nhận thức (đúng/cao/sâu sắc); sự cảm kích",
		example: {
			english:
				"In appreciation of your hard work on the Castcon project, the department will hold a casual lunch party on November third",
			vietnamse:
				"Để đánh giá cao sự làm việc chăm chỉ của các bạn trong dự án Castcon, bộ phận sẽ tổ chức một bữa liên hoan trưa đột xuất vào n",
		},
		topic: "office procedures",
	},
	{
		id: 85,
		name: "be made of ",
		pronounce: "NA",
		explain: "be produced of",
		meaning: "(v): làm bằng (cái gì), gồm có (cái gì)",
		example: {
			english: "This job will really test what you are made of",
			vietnamse:
				"Công việc này sẽ thật sự kiểm tra xem anh là người thế nào",
		},
		topic: "office procedures",
	},
	{
		id: 86,
		name: "bring in",
		pronounce: "NA",
		explain: "to hire or recruit",
		meaning: "(v): Thuê, mướn, tuyển dụng, dẫn tới, mang tới",
		example: {
			english: "The company brought in new team of project planners",
			vietnamse:
				"Công ty đã thuê một đội mới cho các nhà hoạch định dự án",
		},
		topic: "office procedures",
	},
	{
		id: 87,
		name: "casually ",
		pronounce: "ˈkæʒuəli",
		explain: "not showing much care or throught",
		meaning:
			"(adv): bình thường, tự nhiên, không trịnh trọng, thân mật (informally)",
		example: {
			english: "On Fridays, most employees dress casually",
			vietnamse:
				"Vào các thứ Sáu, phần lớn nhân viên ăn mặc tùy ý (không mặc đồng phục)",
		},
		topic: "office procedures",
	},
	{
		id: 88,
		name: "code",
		pronounce: "koud",
		explain: "a set moral principles or rules of behaviour",
		meaning: "(n): quy định, quy tắc, luật lệ, đạo lý",
		example: {
			english:
				"Even the most traditional companies are changing their dress code to something less formal",
			vietnamse:
				"Thậm chí hầu hết các công ty theo lối cổ cũng đang thay đổi quy tắc ăn mặc của họ sao cho bớt trịnh trọng đi",
		},
		topic: "office procedures",
	},
	{
		id: 89,
		name: "expose",
		pronounce: "iks'pouz",
		explain: "to show something that is usually hidden",
		meaning: "(v): phơi bày, bộc lộ, phô ra, trưng bày",
		example: {
			english:
				"He did not want to expose his fears and insecurity to anyone.",
			vietnamse:
				"Anh ấy không muốn để lộ sự sợ hãi và bất an của mình cho bất cứ ai.",
		},
		topic: "office procedures",
	},
	{
		id: 90,
		name: "glimpse",
		pronounce: "glimps",
		explain: "a look at somebody / something for a very short time",
		meaning: "(n): nhìn lướt qua, thoáng qua",
		example: {
			english:
				"The secretary caught a glimpse of her new boss as she was leaving the office.",
			vietnamse:
				"Cô thư ký bắt gặp ánh mắt lướt qua của người chủ mới khi cô ấy rời khỏi văn phòng",
		},
		topic: "office procedures",
	},
	{
		id: 91,
		name: "out of",
		pronounce: "NA",
		explain: "no longer having",
		meaning: "(adj): hết, mất, không còn",
		example: {
			english:
				"The presenter ran out of time before he reached his conclusion",
			vietnamse:
				"Người dẫn chương trình đã hết thời gian trước khi anh ta đi đến kết luận",
		},
		topic: "office procedures",
	},
	{
		id: 92,
		name: "outdated",
		pronounce: "aut'deitid",
		explain: "not currently in use",
		meaning:
			"(adj): hết hạn; lỗi thời, lạc hậu, cổ, hiện nay không còn dùng (obsolete)",
		example: {
			english:
				"Before you do a mailing, make sure that none of the addresses is outdated.",
			vietnamse:
				"Trước khi anh gửi thư, hãy bảo đảm rằng không có địa chỉ nào hiện không còn sử dụng",
		},
		topic: "office procedures",
	},
	{
		id: 93,
		name: "practice",
		pronounce: "'præktis",
		explain: "action rather than ideas",
		meaning:
			"(n, v): (n) sự thực hành; (v) thực hành, rèn luyện, tập luyện; thói quen, thủ tục",
		example: {
			english:
				"Bill practiced answering the telephone until he was satisfied",
			vietnamse:
				"Bill thực tập trả lời điện thoại cho đến khi anh ta cảm thấy hài lòng",
		},
		topic: "office procedures",
	},
	{
		id: 94,
		name: "reinforce ",
		pronounce: ",ri:in'fɔ:s",
		explain: "to make a feeling, an idea, etc. stronger",
		meaning: "(v): tăng cường, củng cố, gia cố",
		example: {
			english:
				"Employees reinforced their learning with practice in the workplace",
			vietnamse:
				"Các nhân viên củng cố kiến thức của mình bằng việc thực hành ở nơi làm việc",
		},
		topic: "office procedures",
	},
	{
		id: 95,
		name: "verbally",
		pronounce: "'və:bəli",
		explain: "in spoken words and not in writing or actions",
		meaning: "(adv): bằng miệng, bằng lời nói",
		example: {
			english: "The guarantee was made only verbally",
			vietnamse: "Sự bảo đảm được cam kết chỉ bằng lời",
		},
		topic: "office procedures",
	},
	{
		id: 96,
		name: "disk",
		pronounce: "disk",
		explain: "a device for storing information on a computer",
		meaning: "(n): đĩa (vi tính, thể thao, đĩa hát...)",
		example: {
			english:
				"Rewritable compact disks are more expensive than read-only CDs",
			vietnamse:
				"Đĩa quang có khả năng ghi thì đắt hơn nhiều đĩa CD chỉ đọc",
		},
		topic: "electronics",
	},
	{
		id: 97,
		name: "facilitate",
		pronounce: "fə'siliteit",
		explain: "to make an action possible or easier",
		meaning: "(v): làm cho dễ dàng, làm cho thuận tiện",
		example: {
			english:
				"The computer program facilitated the scheduling of appointments",
			vietnamse:
				"Chương trình máy tính làm cho việc lập lịch các buổi hẹn được thuận tiện",
		},
		topic: "electronics",
	},
	{
		id: 98,
		name: "network",
		pronounce: "'netwə:k",
		explain:
			"a number of computers and other devices that are connected together",
		meaning: "(v, n): (v) kết nối, liên kết; (n) mạng lưới, hệ thống",
		example: {
			english: "We set up a new network in my office to share files",
			vietnamse:
				"Chúng tôi thiết lập một mạng (máy tính) mới trong văn phòng để chia sẻ tập tin",
		},
		topic: "electronics",
	},
	{
		id: 99,
		name: "popularity",
		pronounce: ",pɔpju'læriti",
		explain: "the state of being liked by a large number of people",
		meaning: "(n): ‹tính/sự› đại chúng, phổ biến, nổi tiếng, được yêu mến",
		example: {
			english:
				"This brand of computers is extremely popular among college students",
			vietnamse:
				"Thương hiệu máy tính này hết sức nổi tiếng trong các sinh viên đại học cao đẳng",
		},
		topic: "electronics",
	},
	{
		id: 100,
		name: "process",
		pronounce: "ˈprəʊses",
		explain:
			"a series of something that are done in order to achieve a particular result",
		meaning:
			"(v, n): (v) xử lý; (n) quá trình, sự tiến triển, sự tiến hành; phương pháp, cách thức, quy trình",
		example: {
			english:
				"There is a process for determining why your computer is malfunctioning",
			vietnamse:
				"Có một cách thức để xác định xem tại sao máy tính của anh bị trục trặc",
		},
		topic: "electronics",
	},
	{
		id: 101,
		name: "replace",
		pronounce: "ri'pleis",
		explain: "to be used instead of something / somebody else",
		meaning: "(v): thay thế; đặt vào lại chỗ cũ",
		example: {
			english: "I've replaced the hard drive that was malfunctioning",
			vietnamse: "Tôi đã thay thế cái đĩa cứng bị trục trặc",
		},
		topic: "electronics",
	},
	{
		id: 102,
		name: "revolution",
		pronounce: ",revə'lu:ʃn",
		explain:
			"a great change in conditions, ways of working, beliefs, etc. ..that affects large numbers of people",
		meaning: "(n): vòng, tua, sự xoay vòng; cuộc cách mạng",
		example: {
			english:
				"We see a revolution in the computer field almost every day",
			vietnamse:
				"Chúng ta thấy một cuộc cách mạng trong lãnh vực máy tính hầu như mỗi ngày",
		},
		topic: "electronics",
	},
	{
		id: 103,
		name: "sharp",
		pronounce: "ʃɑ:p",
		explain: "sudden and rapid, especially of a change in something",
		meaning:
			"(adj): sắc, bén, rõ rệt, sắc nét; thông minh, láu lỉnh; thình lình, đột ngột",
		example: {
			english:
				"The new employee proved how sharp she was when she mastered the new program in a few days",
			vietnamse:
				"Nhân viên mới đã chứng tỏ được cô ấy thông minh đến thế nào khi mà cô đã làm chủ được chương trình mới trong vài ngày",
		},
		topic: "electronics",
	},
	{
		id: 104,
		name: "skill",
		pronounce: "skil",
		explain: "the ability to do something well",
		meaning: "(n): kỹ năng, kỹ xảo; sự khéo léo, sự tinh xảo",
		example: {
			english:
				"The software developer has excellent technical skills and would be an asset to our software programming team",
			vietnamse:
				"Người phát triển phần mềm có những kỹ năng chuyên môn xuất săc và là một vốn quý đối với đội ngũ lập trình phần mềm của chúng tôi",
		},
		topic: "electronics",
	},
	{
		id: 105,
		name: "software",
		pronounce: "ˈsɒftweə(r)",
		explain: "the programs, etc....used to operate a computer",
		meaning: "(n): phần mềm, chương trình máy tính",
		example: {
			english: "Many computers come pre-loaded with software",
			vietnamse: "Nhiều máy tính đã có sẵn phần mềm",
		},
		topic: "electronics",
	},
	{
		id: 106,
		name: "store",
		pronounce: "stɔ:",
		explain: "to keep",
		meaning: "(v): cửa hàng, cửa hiệu, kho hàng",
		example: {
			english: "You can store more data on a zip drive",
			vietnamse: "Anh có thể lưu trữ dữ liệu nhiều hơn trên ổ đĩa nén",
		},
		topic: "electronics",
	},
	{
		id: 107,
		name: "technically",
		pronounce: "ˈteknɪkli",
		explain:
			"in a way that is connected with the skills needed for a particular job",
		meaning:
			"(adv): nói đến/nói về mặt kỹ thuật; một cách chuyên môn/nghiêm túc",
		example: {
			english:
				"Technically speaking, the virus infected only script files",
			vietnamse:
				"Nói về mặt kỹ thuật thì virus chỉ tác động lên các tập tin script (tập tin kịch bản thi hành)",
		},
		topic: "electronics",
	},
	{
		id: 108,
		name: "assemble",
		pronounce: "ə'sembl",
		explain: "to bring people or things together as a group",
		meaning: "(v): thu thập, lắp ráp, tập hợp",
		example: {
			english: "All the students were asked to assemble in the main hall",
			vietnamse:
				"Tất cả các sinh viên được yêu cầu tập hợp ở hội trường chính.",
		},
		topic: "correspondence",
	},
	{
		id: 109,
		name: "beforehand",
		pronounce: "bi'fɔ:hænd",
		explain: "earlier; before something else happens",
		meaning: "(adv): sẵn, có sẵn, trước, sớm",
		example: {
			english:
				"To speed up the mailing, we should prepare the labels beforehand",
			vietnamse: "Để tăng tốc gửi thư, chúng ta nên chuẩn bị nhãn trước.",
		},
		topic: "correspondence",
	},
	{
		id: 110,
		name: "complication",
		pronounce: "ˌkɑːmplɪˈkeɪʃn",
		explain: "a complex combination of elements or things.",
		meaning: "(n): sự phức tạp, sự rắc rối",
		example: {
			english:
				"She will have to spend two more days in the hospital due to complications during the surgery.",
			vietnamse:
				"Cô sẽ phải mất hai ngày nữa trong bệnh viện do biến chứng trong khi phẫu thuật.",
		},
		topic: "correspondence",
	},
	{
		id: 111,
		name: "courier",
		pronounce: "'kuriə",
		explain:
			"a person or company whose job is to take packages or papers somewhere",
		meaning: "(n): người đưa tin, người đưa thư, người chuyển phát",
		example: {
			english: "We hired a courier to deliver the package",
			vietnamse:
				"Chúng tôi đã thuê một người đưa thư để phân phát các kiện hàng.",
		},
		topic: "correspondence",
	},
	{
		id: 112,
		name: "express",
		pronounce: "iks'pres",
		explain: "fast and direct",
		meaning: "(adj): nhanh, hỏa tốc, tốc hành.",
		example: {
			english:
				"It's important that this document be there tomorrow, so please send it express mail.",
			vietnamse:
				"Việc tài liệu này phải có ở chổ ngày mai vì nó rất quan trọng, do đó nên hãy gửi thư chuyển phát nhanh",
		},
		topic: "correspondence",
	},
	{
		id: 113,
		name: "fold",
		pronounce: "fould",
		explain: "to bend something, especially paper or cloth",
		meaning: "(v): nếp gấp, gấp lại",
		example: {
			english:
				"Fold the letter into three parts before stuffing it into the envelope",
			vietnamse: "Gấp lá thư làm ba bước trước khi nhét nó vào bao thư.",
		},
		topic: "correspondence",
	},
	{
		id: 114,
		name: "layout",
		pronounce: "ˈleɪaʊt",
		explain:
			"the way in which the parts of something such as the page of a book, a garden or a building are arranged",
		meaning: "(n): sự bổ trí trang giấy",
		example: {
			english: "There is no single correct layout for business letters",
			vietnamse:
				"Trong thư thương mại thì không có bổ cục nào là chuẩn hoàn toàn hết cả.",
		},
		topic: "correspondence",
	},
	{
		id: 115,
		name: "mention",
		pronounce: "'menʃn",
		explain:
			"an act of refering to somebody / something in speech or writing",
		meaning: "(n, v): (n) sự đề cập; (v) nói đến, đề cập đếm, đề xuất",
		example: {
			english:
				"You should mention in the letter that we can arrange for mailing the brochures as well as printing them",
			vietnamse:
				"Anh nên đề cập trong thư rằng chúng ta có thể thu xếp gửi (thư) tờ bướm cũng như là in ấn chúng.",
		},
		topic: "correspondence",
	},
	{
		id: 116,
		name: "petition",
		pronounce: "pi'tiʃn",
		explain:
			"a written document signed by a large people that asks somebody to change something",
		meaning:
			"(n, v): (n) ‹sự/đơn› cầu xin, đơn kiến nghị, đơn thỉnh cầu; (v) cầu xin, kiến nghị",
		example: {
			english:
				"The petition was photocopied and distributed to workers who will collect the neccessary signatures",
			vietnamse:
				"Đơn kiến nghị được photocopy và phân phát đến những công nhân nào sẽ thu thập chữ ký cần thiết.",
		},
		topic: "correspondence",
	},
	{
		id: 117,
		name: "proof",
		pronounce: "proof",
		explain: "information, documents, etc. that show something is true",
		meaning: "(n): bằng chứng, chứng cớ",
		example: {
			english:
				"This letter was not proofed very carefully; it is full of typing mistakes",
			vietnamse:
				"Lá thư này không được kiểm lỗi cẩn thận; nó đầy những lỗi đánh máy.",
		},
		topic: "correspondence",
	},
	{
		id: 118,
		name: "register",
		pronounce: "'redʤistə",
		explain: "to record somebody / something name on a list",
		meaning: "(v): đăng ký, sổ, sổ sách, công- tơ",
		example: {
			english: "You can register this mail for an additional $2.2",
			vietnamse:
				"Anh ấy có thể gửi đảm bảo thư này với một khoản 2.2 đô-la phí bổ sung",
		},
		topic: "correspondence",
	},
	{
		id: 119,
		name: "revise",
		pronounce: "ri'vaiz",
		explain:
			"to change something, such as a book or an estimate to correct or improve it",
		meaning:
			"(v): đọc lại, xem lại, duyệt lại, sửa lại (bản in thử, đạo luật...)",
		example: {
			english:
				"The brochure was revised several times before it was sent to the printer",
			vietnamse:
				"Tờ bướm được duyệt lại vài lần trước khi nó được gửi đi in.",
		},
		topic: "correspondence",
	},
	{
		id: 120,
		name: "abundant",
		pronounce: "ə'bʌndənt",
		explain: "more than engouh",
		meaning: "(adj): nhiều, phong phú, thừa",
		example: {
			english:
				"The computer analyst was glad to have chosen a field in which jobs were abundant",
			vietnamse:
				"Người phân tích máy tính hài lòng vì đã chọn một lãnh vực mà trong đó việc làm rất nhiều",
		},
		topic: "job ads & recruitment",
	},
	{
		id: 121,
		name: "accomplishment",
		pronounce: "ə'kɔmpliʃmənt",
		explain:
			"an impressive thing that is done or achieved after a lot of work",
		meaning: "(n): thành tựu, thành tích; sự hoàn thành, sự làm xong",
		example: {
			english:
				"The success of the company was based on its early accomplishments",
			vietnamse:
				"Sự thành công của công ty được dựa trên những thành tựu trước đó của nó",
		},
		topic: "job ads & recruitment",
	},
	{
		id: 122,
		name: "bring together",
		pronounce: "NA",
		explain: "to join, to gather",
		meaning: "(v): gom lại; nhóm lại, họp lại",
		example: {
			english:
				"Our goal this year is to bring together the most creative group we can find",
			vietnamse:
				"Mục tiêu của chúng tôi trong năm nay họp thành một sáng tạo nhất.",
		},
		topic: "job ads & recruitment",
	},
	{
		id: 123,
		name: "candidate",
		pronounce: "'kændidit",
		explain:
			"a person who is trying to be elected or is applying for a job",
		meaning: "(n): ứng cử viên, thí sinh, người dự thi, người dự tuyển",
		example: {
			english:
				"The recruiter will interview all candidates for the position",
			vietnamse:
				"Người tuyển dụng sẽ phỏng vấn tất cả ứng viên cho vị trí công việc",
		},
		topic: "job ads & recruitment",
	},
	{
		id: 124,
		name: "come up with",
		pronounce: "NA",
		explain: "to plan, to invent",
		meaning: "(v): đưa ra, phát hiện, khám phá, ý định",
		example: {
			english:
				"In order for that small business to succeed, it needs to come up with a new strategy",
			vietnamse:
				"Để những doanh nghiệp nhỏ có thể thành công thì nó cần đưa ra một chiến lược mới.",
		},
		topic: "job ads & recruitment",
	},
	{
		id: 125,
		name: "commensurate",
		pronounce: "kə'menʃərit",
		explain: "matching something in size, importance, quality",
		meaning: "(adj): (+with) xứng với, tương xứng với",
		example: {
			english:
				"Generally the first year's salary is commensurate with experience and education level",
			vietnamse:
				"Nói chung thì tiền lương năm đầu tiên tương xứng với kinh nghiệm và trình độ học vấn",
		},
		topic: "job ads & recruitment",
	},
	{
		id: 126,
		name: "match",
		pronounce: "mætʃ",
		explain: "a fit, a similarity",
		meaning:
			"(n): ‹cái› xứng nhau, hợp nhau; địch thủ, đối thủ, người ngang tài sức;",
		example: {
			english:
				"It is difficult to make a decision when both candidates seem to be a perfect match",
			vietnamse:
				"Thật là khó đưa ra quyết định khi mà cả 2 ứng viên dường như ngang sức ngang tài",
		},
		topic: "job ads & recruitment",
	},
	{
		id: 127,
		name: "profile",
		pronounce: "profile",
		explain: "a group of characteristics or traits",
		meaning: "(n): tiểu sử sơ lược, bản tóm lược các đặc tính",
		example: {
			english:
				"The recruiter told him that, unfortunately, he did not fit the job profile",
			vietnamse:
				"Người tuyển dụng nói rằng, thật không may, anh ta không hợp với bản tóm lược công việc",
		},
		topic: "job ads & recruitment",
	},
	{
		id: 128,
		name: "qualification",
		pronounce: ",kwɔlifi'keiʃn",
		explain:
			"a skill or type of experience that you need for a particular job or activity",
		meaning: "(n): tư cách, khả năng, năng lực, trình độ (để làm cái gì);",
		example: {
			english:
				"The applicant had so many qualifications that the company created a new position for her",
			vietnamse:
				"Người xin việc có nhiều văn bằng chứng nhận đến nỗi cty đã tạo ra chỗ làm mới cho cô ta",
		},
		topic: "job ads & recruitment",
	},
	{
		id: 129,
		name: "recruit",
		pronounce: "ri'kru:t",
		explain: "They recruited several new members to the club",
		meaning:
			"(v, n): (v) tuyển dụng; (n) lính mới, nhân viên mới, thành viên mới",
		example: {
			english: "The new recruits spent the entire day in training",
			vietnamse: "Những nhân viên mới đã dành ra cả ngày để rèn luyện",
		},
		topic: "job ads & recruitment",
	},
	{
		id: 130,
		name: "submit",
		pronounce: "səb'mit",
		explain: "to present for consideration",
		meaning: "(v): trình, đệ trình; biện hộ",
		example: {
			english: "Submit your résumé to the human resources department",
			vietnamse:
				"Hãy nộp sơ yếu lý lịch của anh cho bộ phận nhân sự (bộ phận nguồn nhân lực)",
		},
		topic: "job ads & recruitment",
	},
	{
		id: 131,
		name: "time-consuming",
		pronounce: "tʌɪm/ /kənˈsjuːmɪŋ",
		explain: "take up a lot of time",
		meaning: "(adj): tốn nhiều thời gian, dài dòng",
		example: {
			english:
				"Five interviews later, Ms. Lopez had the job, but it was the most time-consuming process she had ever gone through",
			vietnamse:
				"Năm cuộc phỏng vấn gần đây, cô Lopez đã có việc làm, nhưng nó là quá trình tốn nhiều thời gian nhất mà cô ấy đã từng trải qua",
		},
		topic: "job ads & recruitment",
	},
	{
		id: 132,
		name: "ability",
		pronounce: "ə'biliti",
		explain: "the fact that somebody / something able to do something",
		meaning: "(n): năng lực, khả năng, tài năng",
		example: {
			english: "The designer's ability was obvious from her porfolio",
			vietnamse:
				"Năng lực của người thiết kế đã rõ ràng từ cặp hồ sơ (thiết kế) của cô ta.",
		},
		topic: "apply and interviewing",
	},
	{
		id: 133,
		name: "apply",
		pronounce: "ə'plai",
		explain:
			"to make a formal request, usually in writing, for something such as a job, a place at college, university",
		meaning:
			"(v): nộp, ứng tuyển, áp dụng, ứng dụng,; thỉnh cầu, xin, xin việc, tim việc",
		example: {
			english:
				"The college graduate applied for three jobs and received three offers.",
			vietnamse:
				"Người tốt nghiệp cao đẳng đã xin việc ở 3 nơi và nhận được 3 lời mời chào.",
		},
		topic: "apply and interviewing",
	},
	{
		id: 134,
		name: "background",
		pronounce: "'bækgraund",
		explain: "the details of a person's familly, education, experience",
		meaning:
			"(n): kiến thức, kinh nghiệm, quá trình đào tạo, quá trình học tập",
		example: {
			english:
				"Your background in the publishing industry is a definite asset for this job",
			vietnamse:
				"Kiến thức của anh trong công nghiệp xuất bản là một vốn quý rõ ràng cho công việc này.",
		},
		topic: "apply and interviewing",
	},
	{
		id: 135,
		name: "be ready for",
		pronounce: "NA",
		explain: "NA",
		meaning: "(v): sẵn sàng cho",
		example: {
			english:
				"Thanks to her careful research, the applicant felt that she was ready for the interview with the director of the program.",
			vietnamse:
				"Nhờ sự nghiên cứu cẩn thận của mình, người xin việc thấy rằng cô ta đã sẵn sàng cho cuộc phỏng vấn với người giám đốc của chươ",
		},
		topic: "apply and interviewing",
	},
	{
		id: 136,
		name: "call in",
		pronounce: "NA",
		explain: "to ask to come, to beckon",
		meaning: "(v): yêu cầu, mời tới",
		example: {
			english:
				"The HR manager called in all the qualified applicants for a 2nd interview",
			vietnamse:
				"Giám đốc nhân sự mời tất cả các ứng viên đủ điều kiện cho một cuộc phỏng vấn lần 2",
		},
		topic: "apply and interviewing",
	},
	{
		id: 137,
		name: "confidence",
		pronounce: "'kɔnfidəns",
		explain:
			"the feeling that you can trust, believe in and be sure about the abilities or good qualities of somebody / something",
		meaning: "(n): sự tin cậy, tin tưởng",
		example: {
			english: "Good applicants show confidence during an interview",
			vietnamse:
				"Những người xin việc giỏi thể hiện sự tự tin trong suốt cuộc phỏng vấn.",
		},
		topic: "apply and interviewing",
	},
	{
		id: 138,
		name: "constantly",
		pronounce: "'kɔnstəntli",
		explain: "all the time; repeatedly",
		meaning: "(adj): Luôn luôn, liên tục, liên miên",
		example: {
			english:
				"The company is constanly looking for highly trained employees",
			vietnamse:
				"Công ty không ngừng tìm kiếm những nhân viên được đào tạo tốt.",
		},
		topic: "apply and interviewing",
	},
	{
		id: 139,
		name: "expert",
		pronounce: "'ekspə:t",
		explain: "a person with special knowledge, skill",
		meaning: "(n): Chuyên gia, chuyên viên",
		example: {
			english: "Our department head is an expert in financing",
			vietnamse:
				"Thủ trưởng bộ phận của chúng tôi là một chuyên gia về tài chính.",
		},
		topic: "apply and interviewing",
	},
	{
		id: 140,
		name: "follow up",
		pronounce: "NA",
		explain: "to continue, to take additional steps",
		meaning: "(v, n): (v) theo sau, bám miết; (n) tiếp theo, kế tiếp",
		example: {
			english: "Always follow up an interview with a thank-you note",
			vietnamse:
				"Luôn bám sát một cuộc phỏng vấn với một lá thư cám ơn ngắn.",
		},
		topic: "apply and interviewing",
	},
	{
		id: 141,
		name: "hesitant",
		pronounce: "'hezitənt",
		explain: "slow to speak or act because you feel uncertain",
		meaning: "(adj): Do dự, lưỡng lự, ngập ngừng",
		example: {
			english: "Marla was hesitant about negotiating a higher salary",
			vietnamse:
				"Marla lưỡng lự về việc thương lượng một mức lương cao hơn.",
		},
		topic: "apply and interviewing",
	},
	{
		id: 142,
		name: "present",
		pronounce: "'preznt - pri'zent",
		explain:
			"to give something to somebody, especially formally at a ceremony",
		meaning: "(v): Đưa ra, bày tỏ, giới thiệu",
		example: {
			english: "The local MP will start the race and present the prizes",
			vietnamse: "MP địa phương sẽ bắt đầu cuộc đua và trao giải thưởng",
		},
		topic: "apply and interviewing",
	},
	{
		id: 143,
		name: "weakly",
		pronounce: "'wi:kli",
		explain: "in a weak way",
		meaning: "(adv): Một cách yếu ớt, yếu, ốm yếu",
		example: {
			english: "Her hands trembled and she spoke weakly at the interview",
			vietnamse:
				"Tay cô ta run và cô ta nói giọng yếu ớt tại buổi phỏng vấn.",
		},
		topic: "apply and interviewing",
	},
	{
		id: 144,
		name: "conduct",
		pronounce: "'kɔndəkt",
		explain: "to organize and / or do a particular activity",
		meaning:
			"(n, v): (n) hạnh kiểm, tư cách, cách cư xử; ‹sự› chỉ đạo, điều khiển, quản lý... (v) tiến hành, cư xử",
		example: {
			english: "Interviews were conducted over a period of three weeks.",
			vietnamse:
				"Các cuộc phỏng vấn được tổ chức trong suốt giai đoạn kéo dài 3 tuần",
		},
		topic: "hiring and training",
	},
	{
		id: 145,
		name: "generate",
		pronounce: "'dʤenəreit",
		explain: "to produce or create something",
		meaning: "(v): sinh ra, đẻ ra; làm ra, tạo ra, phát ra",
		example: {
			english:
				"The new training program generated a lot of interest among employees",
			vietnamse:
				"Chương trình huấn luyện mới đã tạo ra nhiều lợi ích cho mỗi nhân viên",
		},
		topic: "hiring and training",
	},
	{
		id: 146,
		name: "hire",
		pronounce: "'haiə",
		explain: "to give somebody a job",
		meaning: "(n, v): ‹sự› thuê, mướn; tiền trả công",
		example: {
			english: "She was hired after her third interview",
			vietnamse: "Cô ta đã được thuê sau lần phỏng vấn thứ ba",
		},
		topic: "hiring and training",
	},
	{
		id: 147,
		name: "keep up with",
		pronounce: "NA",
		explain: "to stay equal with",
		meaning: "(v): theo kịp, bắt kịp, đạt cho bằng được",
		example: {
			english:
				"Employees are encouraged to take courses in order to keep up with new developments",
			vietnamse:
				"Nhân viên được khuyến khích tham dự các khóa đào tạo để theo kịp sự phát triển mới",
		},
		topic: "hiring and training",
	},
	{
		id: 148,
		name: "look up to",
		pronounce: "NA",
		explain: "to admire",
		meaning: "(v): tôn kính, kính trọng, khâm phục",
		example: {
			english:
				"Staff members looked up to the director because he had earned their respect over the years",
			vietnamse:
				"Tập thể nhân viên tôn kính người giám đốc vì ông đã được hưởng sự kính trọng của họ suốt những năm qua",
		},
		topic: "hiring and training",
	},
	{
		id: 149,
		name: "mentor",
		pronounce: "'mentɔ:",
		explain:
			"a person who gives a younger or less experienced person help and advice over a period of time, especially at work or school",
		meaning:
			"(n): người thầy (thông thái), người cố vấn (dày dạn kinh nghiệm)",
		example: {
			english: "She was a friend and mentor to many young actors",
			vietnamse:
				"Cô là một người bạn và người cố vấn cho nhiều diễn viên trẻ",
		},
		topic: "hiring and training",
	},
	{
		id: 150,
		name: "on track",
		pronounce: "NA",
		explain:
			"an experienced person who advises and helps somebody with less experience",
		meaning: "(n): theo dõi, đi tìm",
		example: {
			english: "They're on track to make record profits",
			vietnamse: "Họ đi tìm cách để tạo ra lợi nhuận đột phá.",
		},
		topic: "hiring and training",
	},
	{
		id: 151,
		name: "reject",
		pronounce: "'ri:dʤekt",
		explain: "to refuse to accept or consider something",
		meaning: "(n, v ): (v) vật bị loại; (n)đồ thừa, đồ bỏ, phế phẩm",
		example: {
			english: "We put the rejects in this box",
			vietnamse: "Chúng tôi để những phế phẩm vào trong hộp này",
		},
		topic: "hiring and training",
	},
	{
		id: 152,
		name: "set up",
		pronounce: "'setʌp",
		explain: "to establish, to arrange",
		meaning: "(adj, v): thiết lập, tạo dựng",
		example: {
			english:
				"Set up a time and place for the meeting and then inform everyone who is involved",
			vietnamse:
				"Thiết lập một thời gian và địa điểm cho cuộc họp và sau đó thông báo cho tất cả những người có liên quan",
		},
		topic: "hiring and training",
	},
	{
		id: 153,
		name: "success",
		pronounce: "sək'ses",
		explain:
			"the fact that you have achieved something that you want and have been trying to do",
		meaning: "(n): ‹sự/người› thành công, thành đạt, thắng lợi",
		example: {
			english:
				"The director's success came after years of hiring the right people at the right time",
			vietnamse:
				"Thành công của giám đốc đã đến sau hàng năm trời thuê đúng người vào đúng thời điểm",
		},
		topic: "hiring and training",
	},
	{
		id: 154,
		name: "training",
		pronounce: "'treiniɳ",
		explain: "the process of learning the skills that you need to do a job",
		meaning: "(n): ‹sự› rèn luyện, tập luyện, huấn luyện, dạy dỗ, đào tạo",
		example: {
			english:
				"The new hire received such good training that, within a week, she was as productive as the other workers",
			vietnamse:
				"Người nhân viên mới nhận được sự huấn luyện tốt đến nỗi, trong vòng một tuần, cô đã có năng suất như là các công nhân khác",
		},
		topic: "hiring and training",
	},
	{
		id: 155,
		name: "update",
		pronounce: "'ʌpdeit",
		explain: "to make something more modern by adding new parts",
		meaning:
			"(v, n): (v) cập nhật; (n) sự cập nhật, thông tin mới nhất, hành động cập nhật;",
		example: {
			english:
				"The personnel officer updated the employees on the latest personnel changes",
			vietnamse:
				"Thư ký văn phòng cập nhật cho nhân viên biết những thay đổi nhân sự mới nhất",
		},
		topic: "hiring and training",
	},
	{
		id: 156,
		name: "basis",
		pronounce: "'beisis",
		explain: "the reason why people take a particular action",
		meaning: "(n): nền tảng, cơ sở, căn cứ",
		example: {
			english:
				"The manager didn't have any basis for firing the employee",
			vietnamse:
				"Người trưởng phòng không có bất kỳ cơ sở nào cho việc sa thải người nhân viên",
		},
		topic: "salaries & benefits",
	},
	{
		id: 157,
		name: "benefit",
		pronounce: "'benifit",
		explain: "an advantage that something gives you",
		meaning: "(n, v): (n) chế độ đãi ngộ, lợi ích, phúc lợi; (v) được lợi",
		example: {
			english:
				"Although the analyst earned a better salary at his new job, his benefits were better at his previous job",
			vietnamse:
				"Mặc dù chuyên viên phân tích kiếm được mức lương tốt hơn với công việc mới, nhưng phúc lợi của anh ta lại tốt hơn với công việc trước đây",
		},
		topic: "salaries & benefits",
	},
	{
		id: 158,
		name: "compensate",
		pronounce: "'kɔmpenseit",
		explain:
			"to provide something good to balance or reduce the bad effects of damage, loss",
		meaning: "(v): bù, đền bù, bồi thường",
		example: {
			english:
				"The company will compensate employees for any travel expenses",
			vietnamse:
				"Công ty sẽ bù cho nhân viên về bất kỳ chi phí đi lại nào",
		},
		topic: "salaries & benefits",
	},
	{
		id: 159,
		name: "delicately",
		pronounce: "ˈdelɪkət",
		explain: "easily damaged or broken",
		meaning:
			"(adv): ‹một cách› tinh vi, tế nhị, lịch thiệp, khôn khéo, thận trọng",
		example: {
			english:
				"The manager delicately asked about the health of his client",
			vietnamse:
				"Người trưởng phòng tế nhị hỏi thăm sức khỏe khách hàng của anh ta",
		},
		topic: "salaries & benefits",
	},
	{
		id: 160,
		name: "eligible ",
		pronounce: "i'liminəbl",
		explain: "able to practicipate in something, qualified",
		meaning:
			"(adj): thích hợp, đủ tư cách, đủ tiêu chuẩn; có thể chọn được",
		example: {
			english:
				"Some employees may be eligible for the tuition reimbursement plan",
			vietnamse:
				"Một số nhân viên có thể đủ tiêu chuẩn cho kế hoạch hoàn trả học phí",
		},
		topic: "salaries & benefits",
	},
	{
		id: 161,
		name: "flexibly",
		pronounce: "ˈfleksəbl",
		explain: "able to change to suit new conditions or situations",
		meaning: "(adv): ‹một cách› mềm dẻo, linh hoạt, linh động",
		example: {
			english:
				"My manager thinks flexibly, enabling herself to solve many sticky problems",
			vietnamse:
				"Trưởng phòng của tôi suy nghĩ linh hoạt, cho phép bà tự giải quyết nhiều vấn đề khó chịu",
		},
		topic: "salaries & benefits",
	},
	{
		id: 162,
		name: "negotiate",
		pronounce: "ni'gouʃieit",
		explain: "to try to reach an agreement by formal discussion",
		meaning: "(v): thương lượng, đàm phán, điều đình",
		example: {
			english:
				"You must know what you want and what you can accept when you negotiate a salary",
			vietnamse:
				"Anh phải biết mình muốn gì và mình có thể chấp nhận gì khi thương lượng về lương bổng",
		},
		topic: "salaries & benefits",
	},
	{
		id: 163,
		name: "raise",
		pronounce: "reiz",
		explain: "n: an increase in salary; v: to move up",
		meaning:
			"(n, v): (n) ‹sự› nâng lên, tăng lên, tăng lương; (v) nâng lên, đưa lên",
		example: {
			english: "We need to raise the standard for timeliness",
			vietnamse: "Chúng ta cần nâng tiêu chuẩn về tính hợp thời",
		},
		topic: "salaries & benefits",
	},
	{
		id: 164,
		name: "retire",
		pronounce: "ri'taiə",
		explain:
			"to stop doing your job, especially because you have reached a particular age",
		meaning: "(v): nghỉ hưu",
		example: {
			english:
				"She was forced to retire early from teaching because of ill health",
			vietnamse:
				"Cô bị buộc phải nghỉ hưu sớm trong việc giảng dạy vì lý do sức khỏe",
		},
		topic: "salaries & benefits",
	},
	{
		id: 165,
		name: "vested",
		pronounce: "'vestid",
		explain: "to give somebody the legal right or power to do something",
		meaning: "(adj): được trao, được ban, được phong; quyền được bảo đảm",
		example: {
			english:
				"The day that Ms. Weng became fully vested in the retirement plan, she gave her two weeks' notice",
			vietnamse:
				"Ngày mà bà Weng được trao đầy đủ kế hoạch nghỉ hưu, bà đã nhận thông báo trước 2 tuần",
		},
		topic: "salaries & benefits",
	},
	{
		id: 166,
		name: "wage",
		pronounce: "weidʤ",
		explain:
			"a regular amount of money that you earn, usually every week, for work",
		meaning: "(n): tiền công, tiền lương (thường trả theo giờ)",
		example: {
			english:
				"Hourly wages have increase by 20 percent over the last two years",
			vietnamse: "Tiền công theo giờ đã tăng 20% qua 2 năm vừa rồi",
		},
		topic: "salaries & benefits",
	},
	{
		id: 167,
		name: "be aware of",
		pronounce: "NA",
		explain: "to be conscious of",
		meaning: "(v): am hiểu, nhận biết, có ý thức, biết, biết được",
		example: {
			english: "Are you aware of the new employee's past work history?",
			vietnamse:
				"Anh có biết về lịch sử làm việc trước đây của người nhân viên mới không?",
		},
		topic: "salaries & benefits",
	},
	{
		id: 168,
		name: "achievement",
		pronounce: "ə'tʃi:vmənt",
		explain:
			"a thing that somebody has done successfully, especially using their own effort and skill",
		meaning: "(n): thành tích, thành tựu; ‹sự› đạt được, hoàn thành",
		example: {
			english:
				"Joseph's achievements in R&D will go down in company history",
			vietnamse:
				"Thành tựu của Joseph ở bộ phận R&D sẽ được ghi vào lịch sử công ty",
		},
		topic: "promotions & awards",
	},
	{
		id: 169,
		name: "contribute",
		pronounce: "kən'tribju:t",
		explain:
			"to give something, especially money or goods, to help somebody",
		meaning: "(v): đóng góp, góp phần; gia tăng, cộng thêm",
		example: {
			english:
				"Make sure your boss is aware of the work you contributed to the project",
			vietnamse:
				"Phải chắc là sếp của bạn nhận biết được việc (mà) bạn đã đóng góp vào dự án",
		},
		topic: "promotions & awards",
	},
	{
		id: 170,
		name: "dedication",
		pronounce: ",dedi'keiʃn",
		explain:
			"the hard work and effort that somebody puts into an activity or purpose",
		meaning: "(n): ‹sự› cống hiến, hiến dâng, tận tâm, tận tụy",
		example: {
			english:
				"The director's dedication to a high-quality product has motivated many of his employees",
			vietnamse:
				"Sự cống hiến của giám đốc cho một sản phẩm chất lượng cao đã thúc đẩy nhiều nhân viên",
		},
		topic: "promotions & awards",
	},
	{
		id: 171,
		name: "look forward to",
		pronounce: "NA",
		explain: "to anticipate",
		meaning: "(v): mong đợi, mong chờ, trông mong",
		example: {
			english: "We look forward to seeing you at the next meeting",
			vietnamse: "Chúng tôi mong đợi được gặp anh vào cuộc họp tiếp sau",
		},
		topic: "promotions & awards",
	},
	{
		id: 172,
		name: "look to",
		pronounce: "NA",
		explain: "to depend on, to rely on",
		meaning: "(v): tin vào, trông cậy vào, mong đợi ở (ai)",
		example: {
			english:
				"The staff is looking to their supervisor for guidance and direction",
			vietnamse:
				"Nhân viên đang trông cậy vào người giám sát của họ về sự chỉ đạo và hướng dẫn",
		},
		topic: "promotions & awards",
	},
	{
		id: 173,
		name: "loyal",
		pronounce: "'lɔiəl",
		explain:
			"remaining faithful to somebody / something and supporting them or it",
		meaning: "(adj): trung thành, trung nghĩa, trung kiên",
		example: {
			english:
				"Even though your assistant is loyal, you have to question his job performance",
			vietnamse:
				"Dù là trợ lý của anh trung thành, anh vẫn phải đặt vấn đề về kết quả công việc của hắn",
		},
		topic: "promotions & awards",
	},
	{
		id: 174,
		name: "merit",
		pronounce: "'merit",
		explain: "the quality of being good and of deserving praise",
		meaning: "(n): giá trị, xuất sắc; công lao, công trạng",
		example: {
			english:
				"Employees are evaluated on their merit and not on seniority",
			vietnamse:
				"Nhân viên được đánh giá theo công lao của họ và không theo thâm niên",
		},
		topic: "promotions & awards",
	},
	{
		id: 175,
		name: "obviously",
		pronounce: "ˈɒbviəsli",
		explain:
			"used when giving infor that you expect other people to know already",
		meaning: "(adv): ‹một cách› rõ ràng, hiển nhiên (clearly, evidently)",
		example: {
			english: "Her tardiness was obviously resented by her coworkers",
			vietnamse:
				"Sự chậm chạp của cô ta rõ ràng là bị đồng nghiệp bực bội",
		},
		topic: "promotions & awards",
	},
	{
		id: 176,
		name: "productive",
		pronounce: "productive",
		explain:
			"making goods or growing crops, especially in large quantities",
		meaning: "(adj): hữu ích; có năng suất, có hiệu quả, sinh lợi cao",
		example: {
			english:
				"The managers had a very productive meeting and were able to solve many of the problems",
			vietnamse:
				"Người trưởng phòng có một cuộc họp rất hiệu quả và đã có thể làm sáng tỏ nhiều vấn đề",
		},
		topic: "promotions & awards",
	},
	{
		id: 177,
		name: "promote",
		pronounce: "promote",
		explain: "to move somebody to a higher rank or more senior job",
		meaning:
			"(v): xúc tiến, đẩy mạnh, khuyến khích; đề xướng, đề đạt; thăng tiến, thăng chức",
		example: {
			english:
				"Even though the sales associate had a good year, it wasn't possible to promote him",
			vietnamse:
				"Dù là người trợ lý kinh doanh đã có một năm tốt, thì vẫn không thể thăng chức anh ta",
		},
		topic: "promotions & awards",
	},
	{
		id: 178,
		name: "recognition",
		pronounce: ",rekəg'niʃn",
		explain:
			"the act of accepting that something exists, is true or is official",
		meaning: "(n): ‹sự› công nhận, thừa nhận, nhận ra",
		example: {
			english:
				"Recognition of excellent work should be routine for every manager",
			vietnamse:
				"Sự nhận ra công việc xuất sắc là chuyện thường ngày của mọi trưởng phòng",
		},
		topic: "promotions & awards",
	},
	{
		id: 179,
		name: "value",
		pronounce: "'vælju:",
		explain: "to think that somebody / something is important",
		meaning: "(v): đánh giá, định giá; chuộng, quý, coi trọng",
		example: {
			english: "The expert valued the text at $7,000",
			vietnamse:
				"Chuyên gia đã định giá nguyên bản/cuốn sách là 7 ngàn đô-la",
		},
		topic: "promotions & awards",
	},
	{
		id: 180,
		name: "bargain",
		pronounce: "bɑːɡən",
		explain:
			"to discuss prices, with somebody in order to reach an agreement that is acceptable",
		meaning:
			"(v, n): (v) trả giá, mặc cả; (n) món hời, cơ hội tốt (buôn bán)",
		example: {
			english:
				"Lois compared the sweaters carefully to determine which was a better bargain",
			vietnamse:
				"Lois so sánh cẩn thận những chiếc áo len để xác định cái nào là món hời hơn",
		},
		topic: "shopping",
	},
	{
		id: 181,
		name: "bear",
		pronounce: "beə",
		explain: "to be able to accept and deal with something unpleasant",
		meaning: "(v): chịu đựng, cam chịu",
		example: {
			english:
				"Moya doesn't like crowds so she cannot bear to shop during the holiday rush",
			vietnamse:
				"Moya không thích đám đông vì thế cô không chịu đi mua sắm trong kỳ đổ xô đi sắm dịp lễ",
		},
		topic: "shopping",
	},
	{
		id: 182,
		name: "behaviour",
		pronounce: "bi'heivjə",
		explain:
			"the way that somebody behaves, especially towards other people",
		meaning: "(n): thái độ, hành vi, cách cư xử, cách đối xử, cách ăn ở",
		example: {
			english:
				"Suspicious behavior in a department store will draw the attention of the security guards",
			vietnamse:
				"Thái độ khả nghi ở trong cửa hàng bách hóa sẽ thu hút sự chú ý của nhân viên an ninh",
		},
		topic: "shopping",
	},
	{
		id: 183,
		name: "checkout",
		pronounce: "NA",
		explain:
			"the place where you pay for the things that you are buying in a supermarket",
		meaning: "(n): thanh toán, quầy thanh toán (ở siêu thị, KS...)",
		example: {
			english:
				"The line at this checkout is too long, so let's look for another",
			vietnamse:
				"Hàng chờ tại quầy tính tiền này dài quá, vậy chúng ta hãy đi tìm hàng khác",
		},
		topic: "shopping",
	},
	{
		id: 184,
		name: "comfort",
		pronounce: "'kʌmfət",
		explain:
			"the state of being physically relaxed or having a pleant life",
		meaning:
			"(v, n): (v) làm khuây khỏa; (n) sự thoải mái,thoải mái, dễ dàng",
		example: {
			english:
				"I like to dress for comfort if I'm spending the day shopping",
			vietnamse:
				"Tôi thích ăn mặc thoải mái (không gò bó) nếu tôi bỏ ra cả ngày đi mua sắm",
		},
		topic: "shopping",
	},
	{
		id: 185,
		name: "expand",
		pronounce: "iks'pænd",
		explain: "to become greater in size, number or importance",
		meaning:
			"(v): mở rộng, trải rộng, giãn ra, nở ra; khai triển, phát triển",
		example: {
			english:
				"The new manager has significantly expanded the store's inventory",
			vietnamse:
				"Người giám đốc mới đã chú trọng triển khai việc kiểm kê kho hàng",
		},
		topic: "shopping",
	},
	{
		id: 186,
		name: "explore",
		pronounce: "iks'plɔ:",
		explain:
			"to examine something completely or carefully to find out more about it",
		meaning: "(v): khảo sát, thăm dò, khám phá",
		example: {
			english:
				"The collector likes to explore antique shops looking for bargains",
			vietnamse:
				"Nhà sưu tập thích đi khám phá các cửa hàng đồ cổ để tìm kiếm các món hời",
		},
		topic: "shopping",
	},
	{
		id: 187,
		name: "item",
		pronounce: "'aitem",
		explain: "one thing on a list of things to buy, do, talk about, etc",
		meaning: "(n): khoản, món, mục, mặt hàng",
		example: {
			english: "Do you think I can get all these items into one bag?",
			vietnamse:
				"Cô có nghĩ rằng tôi có thể để tất cả món đồ này vào một cái túi không?",
		},
		topic: "shopping",
	},
	{
		id: 188,
		name: "mandatory",
		pronounce: "'mændətəri",
		explain: "required by law",
		meaning: "(adj): (thuộc) lệnh, bắt buộc; ủy nhiệm, ủy thác",
		example: {
			english:
				"The jewelry store has a mandatory policy of showing customers only one item at a time",
			vietnamse:
				"Cửa hàng nữ trang có một chính sách bắt buộc là chỉ cho khách xem mỗi lúc một món đồ",
		},
		topic: "shopping",
	},
	{
		id: 189,
		name: "merchandise",
		pronounce: "'mə:tʃəndaiz",
		explain:
			"goods that are bought or sold; goods that are for sale in a shop / store",
		meaning: "(n): hàng hóa",
		example: {
			english:
				"I am very impressed with the selection of merchandise at this store",
			vietnamse:
				"Tôi rất có ấn tượng với sự tuyển chọn hàng hóa tại cửa hàng này",
		},
		topic: "shopping",
	},
	{
		id: 190,
		name: "strictly",
		pronounce: "ˈstrɪktli",
		explain: "with a lot of control and rules that must be obeyed",
		meaning:
			"(adv): ‹một cách› nghiêm ngặt, nghiêm khắc; chính xác, đúng, hoàn toàn",
		example: {
			english: "Our store strictly enforces its return policy",
			vietnamse:
				"Cửa hàng chúng tôi thực thi nghiêm túc chính sách hoàn trả hàng của mình",
		},
		topic: "shopping",
	},
	{
		id: 191,
		name: "trend",
		pronounce: "trend",
		explain:
			"a general diretion in which a situation is changing or developing",
		meaning:
			"(n): khuynh hướng, xu hướng, phương hướng, mốt đang thịnh hành",
		example: {
			english:
				"The clothing store tries to stay on top of all the new trends",
			vietnamse:
				"Cửa hàng trang phục cố gắng nắm bắt tình hình về tất cả các mốt mới",
		},
		topic: "shopping",
	},
	{
		id: 192,
		name: "diversify",
		pronounce: "dai'və:sifai",
		explain: "to develop a wider range of products, interests, skills",
		meaning: "(v): đa dạng hóa, làm cho thành nhiều dạng, thay đổi",
		example: {
			english:
				"The consultant that we hired recommends that we don't diversify at this time",
			vietnamse:
				"Nhà tư vấn mà chúng tôi thuê khuyên rằng chúng tôi không được thay đổi vào lúc này",
		},
		topic: "ordering supplies",
	},
	{
		id: 193,
		name: "enterprise",
		pronounce: "'entəpraiz",
		explain: "a company or business",
		meaning:
			"(n): công trình, dự án lớn; tổ chức kinh doanh, hãng, công ty, xí nghiệp",
		example: {
			english:
				"The new enterprise quickly established an account with the office supply store",
			vietnamse:
				"Công ty mới thiết lập một cách nhanh chóng bản thanh toán với cửa hàng đồ dùng văn phòng (bàn ghế, văn phòng phẩm, máy fax...)",
		},
		topic: "ordering supplies",
	},
	{
		id: 194,
		name: "essentially",
		pronounce: "ɪˈsenʃəli",
		explain:
			"when you think about the true, important, or basic nature of someone or something",
		meaning: "(adv): cần thiết",
		example: {
			english: "He was, essentially, a teacher, not a manager.",
			vietnamse:
				"Về cơ bản thì anh ấy như là 1 giáo viên chứ không phải người quản lý.",
		},
		topic: "ordering supplies",
	},
	{
		id: 195,
		name: "everyday",
		pronounce: "'evridei",
		explain: "routine, common",
		meaning: "(adj): hàng ngày, thường ngày, thông thường",
		example: {
			english:
				"This everyday routine of having to check inventory is boring",
			vietnamse:
				"Công việc thường ngày phải kiểm tra hàng tồn kho thì thật chán",
		},
		topic: "ordering supplies",
	},
	{
		id: 196,
		name: "function",
		pronounce: "fʌŋkʃn",
		explain: "a special activity or purpose of a person or thing",
		meaning: "(v, n): (v) thực hiện chức năng; (n) chức năng, nhiệm vụ",
		example: {
			english: "What is the function of this device?",
			vietnamse: "Chức năng của thiết bị này là gì?",
		},
		topic: "ordering supplies",
	},
	{
		id: 197,
		name: "maintain",
		pronounce: "men'tein",
		explain: "to make something continue at the same level, standard, etc.",
		meaning: "(v): bảo quản, giữ gìn, duy trì",
		example: {
			english:
				"I've been maintaining a list of office supplies that are in greatest demand",
			vietnamse:
				"Tôi đang giữ một danh sách các nơi cung cấp đồ dùng văn phòng được ưa chuộng nhất",
		},
		topic: "ordering supplies",
	},
	{
		id: 198,
		name: "obtain",
		pronounce: "əb'tein",
		explain: "to get something, especially by making an effort",
		meaning: "(v): đạt được, thu được, giành được, kiếm được (to acquire)",
		example: {
			english: "The employee obtained the report from her supervisor",
			vietnamse:
				"Người nhân viên thu thập báo cáo từ người giám sát của của cô ta",
		},
		topic: "ordering supplies",
	},
	{
		id: 199,
		name: "prerequisite",
		pronounce: "'pri:'rekwizit",
		explain:
			"something that must exist or happen before something else can happen or be done",
		meaning:
			"(n): (điều/điều kiện) tiên quyết, cần trước hết, đòi hỏi trước hết",
		example: {
			english:
				"Here are the prerequisites that you need to purchase before coming to class",
			vietnamse:
				"Đây là những thứ đòi hỏi trước hết mà bạn cần phải sắm trước khi vào lớp học",
		},
		topic: "ordering supplies",
	},
	{
		id: 200,
		name: "quality",
		pronounce: "'kwɔliti",
		explain:
			"the standard of something when it is compared to other things like it; how good or bad something is",
		meaning:
			"(n): chất lượng; phẩm chất; đặc tính, năng lực, tài năng, đức tính",
		example: {
			english:
				"The quality of their clothes has fallen ever since they started using cheaper fabrics to make them",
			vietnamse:
				"Chất lượng quần áo của họ đã bị sa sút kể từ khi họ bắt đầu dùng các loại vải rẻ tiền hơn để làm ra chúng",
		},
		topic: "ordering supplies",
	},
	{
		id: 201,
		name: "smooth",
		pronounce: "smu:ð",
		explain:
			"completely flat and even, without any lumps, holes, or rough areas",
		meaning:
			"(adj): nhẵn, trơn, mượt, phẳng lặng; trôi chảy, êm thấm; hòa nhã, lễ độ",
		example: {
			english:
				"Her smooth manner won her the appreciation of the manager but not her colleagues",
			vietnamse:
				"Thái độ hòa nhã của cô ta đã thu được sự đánh giá cao của giám đốc, nhưng không (thu phục) được đồng nghiệp",
		},
		topic: "ordering supplies",
	},
	{
		id: 202,
		name: "source",
		pronounce: "sɔ:s",
		explain: "a place, person, or thing that you get something from",
		meaning: "(n): nguồn, nguồn gốc",
		example: {
			english: "I can't tell you the source of this information",
			vietnamse: "Tôi không thể nói cho anh về nguồn của thông tin này",
		},
		topic: "ordering supplies",
	},
	{
		id: 203,
		name: "stationery",
		pronounce: "'steiʃnəri",
		explain:
			"materials for writing and for using in an office, for example paper, pens, and envelopes",
		meaning: "(n): đồ dùng văn phòng (giấy để viết và bao thư)",
		example: {
			english:
				"We do not have enough stationery, so please order some more",
			vietnamse:
				"Chúng ta không có đủ giấy và bao thư, vậy hãy đặt hàng thêm một ít nữa",
		},
		topic: "ordering supplies",
	},
	{
		id: 204,
		name: "accurately",
		pronounce: "ˈækjərət",
		explain: "correct and true in every detail",
		meaning: "(adv): ‹một cách› chính xác, đúng đắn, xác đáng",
		example: {
			english:
				"To gauge these figures accurately, we first need to get some facts from the shippingdepartment",
			vietnamse:
				"Để đánh giá chính xác những con số này, trước hết chúng ta cần lấy một số dữ kiện từ bộ phận vận chuyển hàng hóa",
		},
		topic: "shipping",
	},
	{
		id: 205,
		name: "carrier",
		pronounce: "'kæriə",
		explain:
			"a company that carries goods or passengers from one place to another, especially by air",
		meaning:
			"(n): ‹người/vật/hãng/công ty› mang, đưa, chuyên chở, vận chuyển, vận tải",
		example: {
			english:
				"Lou, our favorite carrier, takes extra care of our boxes marked 'fragile'",
			vietnamse:
				'Lou, người vận chuyển ưa thich của chúng tôi, đã phải cẩn thận hơn thường lệ với những cái hộp của chúng tôi có dán nhãn "Dễ vỡ"',
		},
		topic: "shipping",
	},
	{
		id: 206,
		name: "fulfill",
		pronounce: "ful'fil",
		explain: "to do or achieve what was hoped for or expected",
		meaning: "(v): thực hiện, thi hành; hoàn thành, làm tròn",
		example: {
			english:
				"Her expectations were so high, we knew they would be hard to fulfill",
			vietnamse:
				"Những mong đợi của cô ta quá cao, chúng tôi biết họ thật khó để thực hiện",
		},
		topic: "shipping",
	},
	{
		id: 207,
		name: "catalog",
		pronounce: "ˈkat(ə)lɒg",
		explain: "NA",
		meaning: "(v, n): bản liệt kê, quyển danh mục, tập giới thiệu SP",
		example: {
			english: "Ellen cataloged the complaints according to severity",
			vietnamse:
				"Ellen chia thành từng mục các lời phàn nàn tùy theo tính nghiêm trọng",
		},
		topic: "shipping",
	},
	{
		id: 208,
		name: "integral",
		pronounce: "'intigrəl",
		explain: "being an essential part of something",
		meaning:
			"(adj): tính toàn bộ/toàn vẹn, cần cho tính toàn bộ/toàn vẹn; cần thiết, không thể thiếu",
		example: {
			english:
				"A dependable stream of inventory is integral to reliable shippingof orders",
			vietnamse:
				"Một dòng tóm tắt có căn cứ là không thể thiếu cho vận chuyển xác thực của các đơn hàng",
		},
		topic: "shipping",
	},
	{
		id: 209,
		name: "inventory",
		pronounce: "in'ventri",
		explain:
			"a written list of all the objects, furniture, etc. in a particular building",
		meaning:
			"(n): ‹sự/bản› kiểm kê, tóm tắt; hàng hóa tồn kho, hàng trong kho",
		example: {
			english:
				"The store closes one day a year so that the staff can take inventory of the stockroom",
			vietnamse:
				"Cửa hàng đóng cửa 1 ngày mỗi năm để cho nhân viên có thể thực hiện kiểm kê kho hàng",
		},
		topic: "shipping",
	},
	{
		id: 210,
		name: "minimize",
		pronounce: "'minimaiz",
		explain:
			"to reduce something, especially something bad, to the lowest possible level",
		meaning:
			"(v): giảm thiểu, giảm đến mức tối thiểu, tối thiểu hóa; đánh giá thấp",
		example: {
			english:
				"The shippingstaff minimized customer complaints by working overtime to deliver the packages quickly",
			vietnamse:
				"Nhân viên hãng tàu đã giảm thiểu lời phàn nàn của khách hàng bằng cách làm việc ngoài giờ để phân phối các gói hàng nhanh chóng",
		},
		topic: "shipping",
	},
	{
		id: 211,
		name: "on hand",
		pronounce: "NA",
		explain: "available",
		meaning: "(adj): có thể dùng được, có sẵn",
		example: {
			english: "We had too much stock on hand, so we had a summer sale",
			vietnamse:
				"Chúng ta đang có sẵn quá nhiều hàng tồn, vậy chúng ta phải có một đợt bán giá hạ mùa hè",
		},
		topic: "shipping",
	},
	{
		id: 212,
		name: "remember",
		pronounce: "ri'membə",
		explain:
			"to have or keep an image in your memory of an event, a person, a place, etc. from the past",
		meaning: "(v): nhớ, ghi nhớ",
		example: {
			english:
				"I will remember the combination to the safe without writing it down",
			vietnamse:
				"Tôi sẽ nhớ khóa số của két sắt mà không phải ghi lại nó",
		},
		topic: "shipping",
	},
	{
		id: 213,
		name: "ship",
		pronounce: "ʃip",
		explain: "to send",
		meaning: "(v): tàu thủy, máy bay",
		example: {
			english:
				"Eva shipped the package carefully, since she knew the contents were made of glass",
			vietnamse:
				"Eva đã chuyển hàng một cách cẩn thận, bởi vì cô biết bên trong được làm bằng thủy tinh",
		},
		topic: "shipping",
	},
	{
		id: 214,
		name: "sufficiently",
		pronounce: "səˈfɪʃnt",
		explain: "enough for a particular purpose; as much as you need",
		meaning: "(adv): đủ, có đủ",
		example: {
			english:
				"We are sufficiently organized to begin transferring the palettes tomorrow",
			vietnamse:
				"Chúng tôi đã tạo ra đủ để bắt đầu chuyển các tấm nâng hàng (pa-let) vào ngày mai",
		},
		topic: "shipping",
	},
	{
		id: 215,
		name: "supply",
		pronounce: "sə'plai",
		explain:
			"an amount of something that is provided or available to be used",
		meaning:
			"(n, v): (n) ‹sự/đồ/nguồn/_› cung cấp, đáp ứng, dự trữ, tiếp tế cấp; (v) cung cấp",
		example: {
			english:
				"By making better use of our supplies, we can avoid ordering until next mont",
			vietnamse:
				"Bằng cách dùng tốt hơn đồ dự trữ của mình, chúng tôi khỏi phải đặt hàng cho đến tháng tới",
		},
		topic: "shipping",
	},
	{
		id: 216,
		name: "charge",
		pronounce: "tʃɑ:dʤ",
		explain: "to ask an amount of money for goods or a service",
		meaning: "(v, n): (v) tính phí; (n) tiền phải trả, tiền công, thù lao",
		example: {
			english: "What did they charge for the repairs ?",
			vietnamse: "Họ đã tính phí gì cho việc sửa chữa?",
		},
		topic: "invoices",
	},
	{
		id: 217,
		name: "compile",
		pronounce: "kəmˈpaɪl",
		explain:
			"to produce a book, list, report, etc. by bringing together different items, articles, songs, etc.",
		meaning: "(v): soạn, biên soạn, soạn thảo",
		example: {
			english:
				"The clerk is responsible for compiling the orders at the end of the day",
			vietnamse:
				"Người nhân viên chịu trách nhiệm soạn các đơn đặt hàng vào cuối ngày",
		},
		topic: "invoices",
	},
	{
		id: 218,
		name: "customer",
		pronounce: "'kʌstəmə",
		explain:
			"a person or an organization that buys something from a store or business",
		meaning: "(n): khách hàng (người mua hàng hóa hoặc dịch vụ)",
		example: {
			english:
				"Let's make sure all invoices sent to customers are kept in alphabetical order",
			vietnamse:
				"Chúng ta phải chắc rằng mọi hóa đơn gửi cho khách hàng được giữ theo thứ tự ABC",
		},
		topic: "invoices",
	},
	{
		id: 219,
		name: "discount ",
		pronounce: "'diskaunt",
		explain:
			"an amount of money that is taken off the usual cost of something",
		meaning:
			"(n, v): (n) ‹sự› giảm, bớt, giảm giá, chiết khấu, khấu trừ; (v) giảm giá",
		example: {
			english:
				"We are offering a 10 percent discount to all new customers",
			vietnamse:
				"Chúng tôi đang đưa ra một khoản giảm giá 10% cho tất cả khách hàng mới",
		},
		topic: "invoices",
	},
	{
		id: 220,
		name: "efficient",
		pronounce: "i'fiʃənt",
		explain:
			"doing something well and thoroughly with no waste of time, money, or energy",
		meaning: "(adj): có hiệu quả, có hiệu suất, có năng suất (cao)",
		example: {
			english:
				"The accountant was so efficient in processing the customer receipts that she had the job done before lunch",
			vietnamse:
				"Nhân viên kế toán làm việc hiệu quả trong việc xử lý các hóa đơn khách hàng đến nỗi cô ta đã hoàn tất công việc trước bữa trưa",
		},
		topic: "invoices",
	},
	{
		id: 221,
		name: "estimate",
		pronounce: "'estimit - 'estimeit",
		explain: "a statement of how much a piece of work will probably cost",
		meaning: "(v, n): (v) ước lượng; (n)‹sự› ước lượng, ước tính",
		example: {
			english:
				"We estimated our losses this year at about five thousand dollars",
			vietnamse:
				"Chúng tôi ước tính thua lỗ trong năm nay của chúng tôi là vào khoảng 5 ngàn đô-la",
		},
		topic: "invoices",
	},
	{
		id: 222,
		name: "impose",
		pronounce: "im'pouz",
		explain:
			"to introduce a new law, rule, tax, etc.; to order that a rule, punishment, etc. be used",
		meaning:
			"(v): bắt chịu, bắt gánh vác; lạm dụng, lợi dụng; áp đặt, ép buộc",
		example: {
			english:
				"The company will impose a surcharge for any items returned",
			vietnamse:
				"Công ty phải chịu một khoản phi tổn thêm với bất kỳ sản phẩm nào bị trả lại",
		},
		topic: "invoices",
	},
	{
		id: 223,
		name: "mistake",
		pronounce: "mis'teik",
		explain: "an action or an opinion that is not correct",
		meaning: "(n): lỗi, sai, nhầm",
		example: {
			english:
				"I made a mistake in adding up your bill and we overcharged you twenty dollars",
			vietnamse:
				"Tôi đã nhầm lẫn khi tính tổng hóa đơn của anh và chúng tôi đã tính quá của anh 20 đô-la",
		},
		topic: "invoices",
	},
	{
		id: 224,
		name: "order",
		pronounce: "'ɔ:də",
		explain: "a request to make or supply goods",
		meaning:
			"(n, v): (n) đơn đặt hàng; thứ tự, trật tự, thứ, bậc, loại; mệnh lệnh, nội quy, thủ tục; (v) đặt hàng",
		example: {
			english: "The customer placed an order for ten new chairs",
			vietnamse: "Người khách hàng đưa đơn đặt hàng 10 cái ghế mới",
		},
		topic: "invoices",
	},
	{
		id: 225,
		name: "promptly",
		pronounce: "ˈprɒmptli",
		explain: "without delay",
		meaning: "(adv): mau lẹ, nhanh chóng, ngay lập tức, tức thời",
		example: {
			english: "We always reply promptly to customers' letters",
			vietnamse:
				"Chúng tôi luôn hồi âm nhanh chóng các lá thư của khách hàng",
		},
		topic: "invoices",
	},
	{
		id: 226,
		name: "rectify",
		pronounce: "'rektifai",
		explain: "to put right something that is wrong",
		meaning: "(v): sửa cho đúng, sửa cho ngay",
		example: {
			english:
				"Embarrassed at his behavior, he rectified the situation by writing a letter of apology",
			vietnamse:
				"Xấu hổ về thái độ của mình, anh ta đã sửa chữa tình huống bằng cách viết thư tạ lỗi",
		},
		topic: "invoices",
	},
	{
		id: 227,
		name: "terms",
		pronounce: "tɜːmz",
		explain:
			"the conditions that people offer, demand, or accept when they make an agreement, an arrangement, or a contract",
		meaning:
			"(n): điều kiện, điều khoản; thời hạn, kỳ hạn, học kỳ, khóa học, phiên tòa",
		example: {
			english:
				"The terms of payment were clearly listed at the bottom of the invoice",
			vietnamse:
				"Các điều kiện thanh toán đã được liệt kê rõ ràng ở bên dưới hóa đơn",
		},
		topic: "invoices",
	},
	{
		id: 228,
		name: "adjustment",
		pronounce: "ə'dʤʌstmənt",
		explain:
			"a small change made to something in order to correct or improve it",
		meaning: "(n): điều chỉnh, chỉnh lý, sự sửa lại cho đúng",
		example: {
			english: "I've made a few adjustments to the design.",
			vietnamse: "Tôi đã thực hiện một vài điều chỉnh để thiết kế.",
		},
		topic: "inventory",
	},
	{
		id: 229,
		name: "automatically",
		pronounce: "ˌɔːtəˈmætɪkli",
		explain:
			"having controls that work without needing a person to operate them",
		meaning: "(adv): ‹một cách› tự động",
		example: {
			english: "The door opens automatically",
			vietnamse: "Cửa mở một cách tự động",
		},
		topic: "inventory",
	},
	{
		id: 230,
		name: "crucial",
		pronounce: "'kru:ʃjəl",
		explain: "extremely important, because it will affect other things",
		meaning: "(adj): cốt yếu, chủ yếu, có tính quyết định",
		example: {
			english:
				"Inventory is a crucial process and must be taken seriously by all staff",
			vietnamse:
				"Kiểm kê là một quá trình cốt yếu và phải được thực hiện nghiêm túc bởi mọi nhân viên",
		},
		topic: "inventory",
	},
	{
		id: 231,
		name: "discrepancy",
		pronounce: "dis'krepənsi",
		explain:
			"a difference between two or more things that should be the same",
		meaning:
			"(n): ‹sự› khác nhau, trái ngược nhau; không nhất quán/thống nhất",
		example: {
			english:
				"We easily explained the discrepancy between the two counts",
			vietnamse:
				"Chúng tôi giải thích rõ ràng sự khác nhau giữa 2 con số tổng",
		},
		topic: "inventory",
	},
	{
		id: 232,
		name: "disturb",
		pronounce: "dis'tə:b",
		explain: "to interrupt somebody when they are trying to work",
		meaning:
			"(v): quấy rầy, quấy rối, làm náo động, gây náo loạn, làm ồn, làm phiền",
		example: {
			english:
				"Let's see how many products we can count in advance of inventory so we disturb fewer customers",
			vietnamse:
				"Hãy xem có bao nhiêu sản phẩm chúng ta có thể đếm trước khi kiểm kê để cho chúng ta làm phiền khách hàng ít hơn",
		},
		topic: "inventory",
	},
	{
		id: 233,
		name: "liability",
		pronounce: ",laiə'biliti",
		explain: "the state of being legally responsible for something",
		meaning:
			"(n): trách nhiệm, nghĩa vụ pháp lý; nguy cơ, điều gây khó khăn trở ngại",
		example: {
			english:
				"The slippery steps were a terrible liability for the store",
			vietnamse:
				"Những bậc thềm trơn trượt là một nguy cơ tệ hại cho cửa hàng",
		},
		topic: "inventory",
	},
	{
		id: 234,
		name: "reflection",
		pronounce: "rɪˈflekʃn",
		explain: "a sign that shows the state or nature of something",
		meaning:
			"(n): ‹sự› phản chiếu, phản xạ, phản ánh, hình ảnh; phê phán, nhận xét",
		example: {
			english: "She saw her reflection in the mirror",
			vietnamse: "Cô ấy nhìn ảnh của mình ở trong gương",
		},
		topic: "inventory",
	},
	{
		id: 235,
		name: "run",
		pronounce: "rʌn",
		explain: "to operate or function; to make something do this",
		meaning: "(v): chạy, vận hành, hoạt động, thực hiện",
		example: {
			english:
				"As long as the computer is running, you can keep adding new data",
			vietnamse:
				"Trong khi máy tính đang chạy, bạn có thể thực hiện việc bổ sung thêm dữ liệu mới",
		},
		topic: "inventory",
	},
	{
		id: 236,
		name: "scan",
		pronounce: "skæn",
		explain:
			"to look at every part of something carefully, especially because you are looking for a particular thing or person",
		meaning: "(v): xem lướt, xem qua",
		example: {
			english: "She scanned through the newspaper over breakfast.",
			vietnamse: "Cô ấy đã xem qua tờ báo trong lúc ăn sáng",
		},
		topic: "inventory",
	},
	{
		id: 237,
		name: "subtract",
		pronounce: "səb'trækt",
		explain:
			"to take a number or an amount away from another number or amount",
		meaning: "(v): trừ đi, khấu trừ; loại ra, lấy ra khỏi",
		example: {
			english: "6 subtracted from 9 is 3.",
			vietnamse: "9 trừ 6 được 3",
		},
		topic: "inventory",
	},
	{
		id: 238,
		name: "tedious",
		pronounce: "'ti:djəs",
		explain: "lasting or taking too long and not interesting",
		meaning: "(adj): chán ngắt, tẻ nhạt, nhạt nhẽo, buồn tẻ",
		example: {
			english:
				"Counting merchandise all weekend is the most tedious job I can imagine",
			vietnamse:
				"Kiểm đếm hàng suốt kỳ nghỉ cuối tuần là một công việc tẻ nhạt nhất tôi có thể hình dung",
		},
		topic: "inventory",
	},
	{
		id: 239,
		name: "verify",
		pronounce: "'verifai",
		explain: "to check that something is true or accurate",
		meaning: "(v): kiểm tra lại, thẩm tra, xác minh",
		example: {
			english: "We have no way of verifying his story",
			vietnamse:
				"Chúng tôi không có cách nào để xác minh câu chuyện của anh ấy",
		},
		topic: "inventory",
	},
	{
		id: 240,
		name: "accept",
		pronounce: "ək'sept",
		explain: "to say “yes” to an offer, invitation, etc",
		meaning: "(v): nhận, chấp nhận, thừa nhận, công nhận",
		example: {
			english: "The receptionist accepted the package from the courier",
			vietnamse: "Người tiếp tân đã nhận kiện hàng từ người đưa thư",
		},
		topic: "banking",
	},
	{
		id: 241,
		name: "balance",
		pronounce: "'bæləns",
		explain:
			"the amount that is left after taking numbers or money away from a total",
		meaning:
			"(n, v): (n) cái cân, cán cân, sự cân bằng; số dư tài khoản; (v) quyết toán",
		example: {
			english: "It took him over an hour to balance his checkbook",
			vietnamse:
				"Nó lấy mất của anh hơn một tiếng đồng hồ để quyết toán tập chi phiếu",
		},
		topic: "banking",
	},
	{
		id: 242,
		name: "borrow",
		pronounce: "'bɔrou",
		explain:
			"to take and use something that belongs to someone else, and return it to them at a later time",
		meaning: "(v): vay, mượn",
		example: {
			english: "Do you want to borrow a pen?",
			vietnamse: "Anh có muốn mượn một cây viết không?",
		},
		topic: "banking",
	},
	{
		id: 243,
		name: "cautiously",
		pronounce: "ˈkɔːʃəsli",
		explain: "being careful about what you say or do",
		meaning: "(adv): ‹một cách› thận trọng, cẩn thận (carefully)",
		example: {
			english:
				"Act cautiously when signing contracts and read them thoroughly first",
			vietnamse:
				"Hành động thận trọng khi ký các hợp đồng và trước hết hãy đọc chúng kỹ lưỡng",
		},
		topic: "banking",
	},
	{
		id: 244,
		name: "deduct",
		pronounce: "di'dʌkt",
		explain: "to take away money, points, etc., from a total amount",
		meaning: "(v): lấy đi, trừ đi, khấu trừ",
		example: {
			english:
				"By deducting the monthly fee from her checking account, Yi was able to make her account balance",
			vietnamse:
				"Do việc khấu trừ tiền thù lao hàng tháng vào tài khoản vãng lai, Yi đã có thể thực hiện cân bằng thu chi tài khoản của mình",
		},
		topic: "banking",
	},
	{
		id: 245,
		name: "dividend",
		pronounce: "'dividend",
		explain:
			"an amount of the profits that a company pays to people who own shares in the company",
		meaning:
			"(n): tiền lãi cổ phần, tiền được cuộc, cái bị chia, số bị chia (toán)",
		example: {
			english: "The dividend was calculated and distributed to the group",
			vietnamse: "cổ tức được tính toán và phân bổ theo nhóm",
		},
		topic: "banking",
	},
	{
		id: 246,
		name: "down payment",
		pronounce: "NA",
		explain: "an initial partial payment",
		meaning: "(n): phần tiền trả trước ban đầu",
		example: {
			english:
				"By making a large down payment, the couple saved a great deal in mortgage interest",
			vietnamse:
				"Bằng việc trả trước một phần lớn, đôi vợ chồng tiết kiệm được một khoản lãi cầm cố cao",
		},
		topic: "banking",
	},
	{
		id: 247,
		name: "mortgage",
		pronounce: "ˈmɔːɡɪdʒ",
		explain:
			"a legal agreement by which a bank or similar organization lends you money to buy a house, etc., and you pay the money back over a particular number of years; the sum of money that you borrow",
		meaning: "(n, v): (n) sự cầm cố, sự thế chấp; (v) cấm cố, thế chấp",
		example: {
			english:
				"Hiram mortgaged his home to get extra money to invest in his business",
			vietnamse:
				"Hiram thế chấp nhà mình để nhận một khoản tiền phụ thêm để đầu tư cho công việc",
		},
		topic: "banking",
	},
	{
		id: 248,
		name: "restricted",
		pronounce: "ris'triktid",
		explain: "limited or small in size or amount",
		meaning: "(adj): bị hạn chế, bị giới hạn",
		example: {
			english:
				"Access to the safe deposit box vault is restricted to key holders",
			vietnamse:
				"Việc vào hầm két bạc được hạn chế trong những người giữ chìa khóa",
		},
		topic: "banking",
	},
	{
		id: 249,
		name: "signature",
		pronounce: "'signitʃə",
		explain:
			"your name as you usually write it, for example at the end of a letter",
		meaning: "(n): chữ ký, ký hiệu, dấu hiệu",
		example: {
			english:
				"The customer's signature was kept on file for identification purposes",
			vietnamse:
				"Chữ ký của khách hàng được lưu trên file nhằm mục đích nhận dạng",
		},
		topic: "banking",
	},
	{
		id: 250,
		name: "take out",
		pronounce: "NA",
		explain: "remove",
		meaning: "(v): rút (tiền)",
		example: {
			english: "When can I take money out of bank?",
			vietnamse: "Khi nào tôi có thể rút tiền khỏi ngân hàng",
		},
		topic: "banking",
	},
	{
		id: 251,
		name: "transaction",
		pronounce: "træn'zækʃn",
		explain:
			"a piece of business that is done between people, especially an act of buying or selling",
		meaning: "(n): sự giao dịch, công việc kinh doanh",
		example: {
			english:
				"Banking transaction will appear on your monthly statement",
			vietnamse:
				"Giao dịch ngân hàng sẽ xuất hiện trong thông báo tài khoản ngân hàng mỗi tháng",
		},
		topic: "banking",
	},
	{
		id: 252,
		name: "accounting",
		pronounce: "ə'kauntiɳ",
		explain: "the process or work of keeping financial accounts",
		meaning: "(n): công việc kế toán; sự thanh toán, tính toán",
		example: {
			english: "Good accounting is needed in all businesses",
			vietnamse: "Việc kế toán tốt là cần thiết cho mọi công việc làm ăn",
		},
		topic: "accounting",
	},
	{
		id: 253,
		name: "accumulate",
		pronounce: "ə'kju:mjuleit",
		explain:
			"to gradually get more and more of something over a period of time",
		meaning: "(v): tích lũy, tích góp, gom góp",
		example: {
			english: "They have accumulated more than enough information",
			vietnamse: "Họ đã tích lũy nhiều hơn mức thông tin đủ dùng",
		},
		topic: "accounting",
	},
	{
		id: 254,
		name: "asset",
		pronounce: "'æset",
		explain:
			"a person or thing that is valuable or useful to someone or something",
		meaning: "(n): tài sản, của cải",
		example: {
			english: "The company's asset are worth millions of dollars",
			vietnamse: "Tài sản của công ty trị giá hàng triệu đô-la",
		},
		topic: "accounting",
	},
	{
		id: 255,
		name: "audit",
		pronounce: "'ɔ:dit",
		explain:
			"an official examination of business and financial records to see that they are true and correct",
		meaning: "(n, v): (n) sự kiểm tra sổ sách, sự kiểm toán; (v) kiểm toán",
		example: {
			english: "The independent accountants audited the company's book",
			vietnamse:
				"Những kế toán viên độc lập đã kiểm toán sổ sách kế toán của công ty",
		},
		topic: "accounting",
	},
	{
		id: 256,
		name: "budget",
		pronounce: "ˈbʌdʒɪt",
		explain:
			"the money that is available to a person or an organization and a plan of how it will be spent over a period of time",
		meaning: "(n, v): (n)ngân sách, ngân quỹ; (v) lên ngân sách",
		example: {
			english:
				"The company will have to budget more money for this department next year",
			vietnamse:
				"Công ty sẽ phải dự thảo ngân sách nhiều tiền hơn cho bộ phận này vào năm sau",
		},
		topic: "accounting",
	},
	{
		id: 257,
		name: "build up",
		pronounce: "'bildʌp",
		explain: "to increase over time",
		meaning:
			"(v): tăng cường, gom lại, tích lại, xây dựng dần dần lên, ‹trở thành› lớn hơn, nhiều hơn",
		example: {
			english: "The firm has built up a solid reputation for itself",
			vietnamse:
				"Công ty phải xây dựng dần lên danh tiếng vững chắc cho chính mình",
		},
		topic: "accounting",
	},
	{
		id: 258,
		name: "client",
		pronounce: "'klaiənt",
		explain: "a customer",
		meaning: "(n): khách, khách hàng",
		example: {
			english:
				"We must provide excellent services for our clients, otherwise we will lose them to our competition",
			vietnamse:
				"Chúng ta phải cung cấp các dịch vụ xuất sắc cho khách hàng của mình, bằng không chúng ta sẽ để mất họ vào tay đối thủ",
		},
		topic: "accounting",
	},
	{
		id: 259,
		name: "debt ",
		pronounce: "det",
		explain: "a sum of money that someone owes",
		meaning: "(n): nợ, món nợ",
		example: {
			english: "The banks are worried about your increasing debt",
			vietnamse:
				"Các ngân hàng lo lắng về khoản nợ đang gia tăng của anh",
		},
		topic: "accounting",
	},
	{
		id: 260,
		name: "outstanding",
		pronounce: "aut'stændiɳ",
		explain: "extremely good; excellent",
		meaning: "(adj): còn tồn tại, chưa giải quyết xong, chưa trả nợ",
		example: {
			english: "She has outstanding debts of over £500.",
			vietnamse: "Cô ấy còn khoản nợ hơn 500 triệu bảng Anh.",
		},
		topic: "accounting",
	},
	{
		id: 261,
		name: "profitably",
		pronounce: "ˌprɒfɪtəˈbɪləti",
		explain: "that makes or is likely to make money",
		meaning: "(adv): có lợi, có ích, sinh lãi, sinh lợi",
		example: {
			english: "We invested in the stock market profitable",
			vietnamse: "Công ty đã đầu tư sinh lợi vào thị trường chứng khoán",
		},
		topic: "accounting",
	},
	{
		id: 262,
		name: "reconcile",
		pronounce: "'rekənsail",
		explain:
			"to find an acceptable way of dealing with two or more ideas, needs, etc. that seem to be opposed to each other",
		meaning:
			"(v): hòa giải, giảng hòa; chỉnh lý, điều hòa, làm cho phù hợp/nhất trí",
		example: {
			english:
				"The accountant found the error when she reconcile the account",
			vietnamse:
				"Nhân viên kế toán tìm ra lỗi khi cô ấy chỉnh lý tài khoản (sửa lại tài khoản cho đúng)",
		},
		topic: "accounting",
	},
	{
		id: 263,
		name: "turnover",
		pronounce: "ˈtɜːnəʊvə(r)",
		explain:
			"the total amount of goods or services sold by a company during a particular period of time",
		meaning: "(n): doanh số, doanh thu",
		example: {
			english: "An annual turnover of $75 million",
			vietnamse: "Doanh thu hàng năm của $ 75.000.000",
		},
		topic: "accounting",
	},
	{
		id: 264,
		name: "aggressively",
		pronounce: "əˈɡresɪv",
		explain: "acting with force and determination in order to succeed",
		meaning: "(adv): hung hăng, hùng hổ; tháo vát, xông xáo",
		example: {
			english:
				"His ideas were not well received because he spoke so aggressively",
			vietnamse:
				"Ý kiến của anh ta không được đón nhận nhiều vì anh ta nói quá hùng hổ",
		},
		topic: "investments",
	},
	{
		id: 265,
		name: "attitude",
		pronounce: "'ætitju:d",
		explain: "the way that you think and feel about somebody/something",
		meaning:
			"(n): quan điểm, thái độ (với ai hoặc cái gì); tư thế, điệu bộ, dáng dấp",
		example: {
			english:
				"Each investor should assess his or her own attitude toward investment",
			vietnamse:
				"Mỗi nhà đầu tư nên tự đánh giá quan điểm của chính mình về việc đầu tư",
		},
		topic: "investments",
	},
	{
		id: 266,
		name: "commit",
		pronounce: "kə'mit",
		explain: "to promise sincerely that you will definitely do something",
		meaning: "(v): gửi, giao, giao phó, ủy nhiệm, ủy thác; hứa, cam kết",
		example: {
			english:
				"It is a good idea to commit a certain percentage of your income to investments",
			vietnamse:
				"Ý tưởng tốt là đem một vài % nào đó thu nhập của bạn để đầu tư",
		},
		topic: "investments",
	},
	{
		id: 267,
		name: "conservative",
		pronounce: "kən'sə:vətiv",
		explain:
			"opposed to great or sudden social change; showing that you prefer traditional styles and values",
		meaning: "(adj): bảo thủ, dè dặt, thận trọng",
		example: {
			english: "Her conservative strategy paid off over the years",
			vietnamse:
				"Chiến lược bảo thủ của cô ta đã đem lại kết quả tốt trong suốt những năm qua",
		},
		topic: "investments",
	},
	{
		id: 268,
		name: "fund",
		pronounce: "fʌnd",
		explain:
			"an amount of money that has been saved or has been made available for a particular purpose",
		meaning:
			"(n, v): (n) nguồn tiền, quỹ dự trữ; kho; (v) tài trợ, cấp tiền cho",
		example: {
			english:
				"He will have access to his trust fund when he is 21 years old",
			vietnamse:
				"Anh ta sẽ được đụng đến tài sản được ủy thác (trust fund) của mình khi 21 tuổi",
		},
		topic: "investments",
	},
	{
		id: 269,
		name: "invest",
		pronounce: "in'vest",
		explain:
			"to buy property, shares in a company, etc. in the hope of making a profit",
		meaning: "(v): Đầu tư",
		example: {
			english: "Don't invest all of your time in just one project",
			vietnamse: "Đừng đầu tư tất cả thời gian của bạn vào chỉ một dự án",
		},
		topic: "investments",
	},
	{
		id: 270,
		name: "long-term",
		pronounce: "'lɔɳtə:m",
		explain: "involing long time period",
		meaning: "(adj): dài hạn, dài ngày, lâu dài (Trái nghĩa: short-term)",
		example: {
			english:
				"The CEO's long-term goal was to increase the return on investment",
			vietnamse:
				"Mục tiêu dài hạn của giám đốc điều hành (CEO) là gia tăng tiền lãi thu về từ việc đầu tư",
		},
		topic: "investments",
	},
	{
		id: 271,
		name: "portfolio",
		pronounce: "pɔ:t'fouljou",
		explain:
			"the range of products or services offered by a particular company or organization",
		meaning:
			"(n): danh mục đầu tư, danh sách vốn đầu tư (của 1 cty, ngân hàng...)",
		example: {
			english: "Investors are advised to have diverse portfolios",
			vietnamse:
				"Nhà đầu tư được khuyên nên có nhiều danh mục đầu tư khác nhau",
		},
		topic: "investments",
	},
	{
		id: 272,
		name: "pull out",
		pronounce: "'pulaut",
		explain: "to withdraw, to stop",
		meaning:
			"(v, n): (v) rút ra, rút khỏi, thôi không tham gia; (n) sự rút lui",
		example: {
			english:
				"The pull out of the bank has left the company without financing",
			vietnamse:
				"Sự rút lui của ngân hàng đã để mặc cho công ty không còn tài chính",
		},
		topic: "investments",
	},
	{
		id: 273,
		name: "resource",
		pronounce: "rɪˈsɔːs",
		explain:
			"a supply of something that a country, an organization, or a person has and can use, especially to increase their wealth",
		meaning: "(n): tài nguyên, tài sản",
		example: {
			english: "The company's most valuable resource was its staff",
			vietnamse:
				"Nguồn tài nguyên đáng giá nhất của công ty là đội ngũ nhân viên của nó",
		},
		topic: "investments",
	},
	{
		id: 274,
		name: "return",
		pronounce: "ri'tə:n",
		explain: "a mount of profit that you get from something",
		meaning: "(n): tiền lãi, tiền lời",
		example: {
			english:
				"Some investors are satisfied with a 15 percent return, while others want to see a much larger return",
			vietnamse:
				"Một số nhà đầu tư hài lòng với một khoản lãi 15%, trong khi những người khác thì muốn thấy mức lãi nhiều hơn",
		},
		topic: "investments",
	},
	{
		id: 275,
		name: "wisely",
		pronounce: "waɪz",
		explain:
			"able to make sensible decisions and give good advice because of the experience",
		meaning: "(adj): khôn ngoan, từng trải, thông thái, uyên bác",
		example: {
			english: "If you invest wisely, you will be able to retire early",
			vietnamse: "Nếu anh đầu tư thông minh, anh sẽ có thể về hưu sớm",
		},
		topic: "investments",
	},
	{
		id: 276,
		name: "calculation",
		pronounce: ",kælkju'leiʃn",
		explain: "the act or process of using numbers to find out an amount",
		meaning: "(n): ‹sự/kết quả› tính, tính toán; ‹sự› dự tính, trù liệu",
		example: {
			english:
				"According to my calculations, I'll owe less money on my income taxes this year",
			vietnamse:
				"Theo tính toán của tôi, tôi sẽ chịu tiền thuế thu nhập ít hơn trong năm nay",
		},
		topic: "taxes",
	},
	{
		id: 277,
		name: "deadline",
		pronounce: "ˈdedlaɪn",
		explain: "a point in time by which something must be done",
		meaning: "(n): thời hạn chót",
		example: {
			english:
				"The deadline for paying this years's taxes is just two weeks away",
			vietnamse:
				"Hạn chót cho việc nộp thuế cho năm nay chỉ còn cách 2 tuần",
		},
		topic: "taxes",
	},
	{
		id: 278,
		name: "file",
		pronounce: "fail",
		explain:
			"to present something so that it can be officially recorded and dealt with",
		meaning: "(v): sắp xếp, sắp đặt",
		example: {
			english:
				"To file a claim / complaint / petition / lawsuit (How to File a Lawsuit)",
			vietnamse:
				"Để nộp đơn khiếu nại/khiếu nại/kiến nghị/vụ kiện (Làm thế nào để nộp đơn kiện)",
		},
		topic: "taxes",
	},
	{
		id: 279,
		name: "fill out",
		pronounce: "NA",
		explain: "to complete",
		meaning: "(v): hoàn tất, hoàn thành; điền vào (cho đầy đủ)",
		example: {
			english: "I usually ask someone to help me fill out my tax form",
			vietnamse: "Tôi thường đề nghị ai đó giúp tôi điền vào các biểu mẫu thuế cho tôi",
		},
		topic: "taxes",
	},
	{
		id: 280,
		name: "give up",
		pronounce: "NA",
		explain: "to quit, to stop",
		meaning: "(v): bỏ, từ bỏ, thôi; tạm dừng; đầu hàng",
		example: {
			english: "Ms. Gomez is so optimistic that she never gives up",
			vietnamse: "Cô Gomez lạc quan đến nỗi chưa bao giờ bỏ cuộc",
		},
		topic: "taxes",
	},
	{
		id: 281,
		name: "joint",
		pronounce: "dʒɔint",
		explain: "involving two or more people together",
		meaning: "(adj): chung, cùng",
		example: {
			english: "We opened a joint bank account five years ago",
			vietnamse: "Chúng tôi đã mở một tài khoản ngân hàng chung từ 5 năm trước",
		},
		topic: "taxes",
	},
	{
		id: 282,
		name: "owe",
		pronounce: "ou",
		explain: "return money that you have borrowed",
		meaning: "(v): nợ, mắc nợ; mang ơn, hàm ơn, chịu ơn",
		example: {
			english: "As the business grew, the owner paid back loans and owed less money",
			vietnamse: "Vì kinh doanh tăng trưởng, người chủ đã hoàn trả các khoản vay và chỉ còn nợ ít hơn",
		},
		topic: "taxes",
	},
	{
		id: 283,
		name: "penalty",
		pronounce: "'penlti",
		explain: "a punishment for breaking a law, rule, or contract",
		meaning: "(n): khoản tiền phạt",
		example: {
			english: "To impose a penalty",
			vietnamse: "Để áp dụng một hình phạt",
		},
		topic: "taxes",
	},
	{
		id: 284,
		name: "preparation",
		pronounce: ",prepə'reiʃn",
		explain: "the act or process of getting ready for something or making something ready",
		meaning: "(n): ‹sự› chuẩn bị, sửa soạn",
		example: {
			english: "Income tax preparation can take a long time",
			vietnamse: "Việc chuẩn bị cho thuế thu nhập có thể tốn một thời gian dà",
		},
		topic: "taxes",
	},
	{
		id: 285,
		name: "refund",
		pronounce: "'fʌnd",
		explain: "a sum of money that is paid back to you, especially because you paid too much or because you returned goods to a store",
		meaning: "(n, v): (n) sự trả lại tiền; (v) trả lại, hoàn lại tiền",
		example: {
			english: "With the tax refund, we bought two plane tickets",
			vietnamse: "Với tiền hoàn thuế, chúng tôi đã mua hai vé máy bay",
		},
		topic: "taxes",
	},
	{
		id: 286,
		name: "spouse",
		pronounce: "spauz",
		explain: "a husband or wife",
		meaning: "(n): Chồng, vợ",
		example: {
			english: "My spouse prepares the tax return for both of us",
			vietnamse: "Vợ/chồng tôi chuẩn bị bản khai báo thuế cho cả hai chúng tôi",
		},
		topic: "taxes",
	},
	{
		id: 287,
		name: "withhold",
		pronounce: "wi 'hould",
		explain: "to refuse to give something to someone",
		meaning: "(v): cố nín, cố nhịn, kìm lại, giữ lại; ngăn cản, cản trở",
		example: {
			english: "Do not withhold any information from your accountant or he will not be able to prepare your tax form correctly",
			vietnamse: "Đừng giấu diếm bất kỳ thông tin nào với người kế toán của bạn kẻo không anh ta không thể chuẩn bị biểu mẫu thuế cho bạn chính xác được",
		},
		topic: "taxes",
	},
	{
		id: 288,
		name: "desire",
		pronounce: "di'zaiə",
		explain: "a strong wish to have or do something",
		meaning: "(v): thèm muốn, khao khát, ao ước",
		example: {
			english: "We desire to have our own home",
			vietnamse: "Chúng tôi ao ước có ngôi nhà riêng",
		},
		topic: "financial statements",
	},
	{
		id: 289,
		name: "detail",
		pronounce: "'di:teil",
		explain: "to give a list of facts or all the available information",
		meaning: "(v): chi tiết, tỉ mỉ",
		example: {
			english: "The office manager detailed each step of the inventory process at the staff meeting",
			vietnamse: "Quản lý văn phòng trình bày chi tiết từng bước của quá trình kiểm kê tại cuộc họp NV",
		},
		topic: "financial statements",
	},
	{
		id: 290,
		name: "forecast",
		pronounce: "fɔ:'kɑ:st",
		explain: "a statement about what will happen in the future, based on information that is available now",
		meaning: "(n): (n) sự dự báo trước; (v) dự báo, dự đoán, đoán trước",
		example: {
			english: "Analysts forecast a strong economic outlook",
			vietnamse: "Các nhà phân tích dự báo một viễn cảnh kinh tế sung sức",
		},
		topic: "financial statements",
	},
	{
		id: 291,
		name: "level",
		pronounce: "'levl",
		explain: "the amount of something that exists in a particular situation at a particular time",
		meaning: "(n): mức, cấp, cấp bậc, trình độ",
		example: {
			english: "We have never had an accountant work at such a sophisticated level before",
			vietnamse: "Trước đây chúng tôi không bao giờ có một NV kế toán làm với trình độ tinh vi đến thế",
		},
		topic: "financial statements",
	},
	{
		id: 292,
		name: "overall",
		pronounce: "'ouvərɔ:l",
		explain: "general",
		meaning: "(adj): toàn bộ, toàn thể, tất cả; nói chung",
		example: {
			english: "Overall, our costs are running true to prediction",
			vietnamse: "Nói chung, chi phí của chúng ta đang vận hành đúng như dự kiến",
		},
		topic: "financial statements",
	},
	{
		id: 293,
		name: "perspective",
		pronounce: "pə'spektiv",
		explain: "a way of thinking about something",
		meaning: "(n): luật xa gần, luật phối cảnh; cảnh trông xa, viễn cảnh, triển vọng",
		example: {
			english: "The budget statement will give the manager some perspective on where the costs of running the business are to be found",
			vietnamse: "Bản báo cáo ngân sách sẽ cho người trưởng phòng một vài khía cạnh về việc tìm ra chi phí vận hành công việc ở chỗ nào",
		},
		topic: "financial statements",
	},
	{
		id: 294,
		name: "project",
		pronounce: "project",
		explain: "to plan an activity, a project etc, for a time in the future",
		meaning: "(v): kế hoạch, đồ án, dự án",
		example: {
			english: "The director projects that the company will need to hire ten new employees his year",
			vietnamse: "Người giám đốc lập kế hoạch là công ty sẽ cần phải thuê 10 nhân viên mới trong năm nay",
		},
		topic: "financial statements",
	},
	{
		id: 295,
		name: "realistic",
		pronounce: "riə'listik",
		explain: "accepting in a sensible way what it is actually possible to do or achieve in a particular situation",
		meaning: "(adj): hiện thực, thực tế",
		example: {
			english: "Stefano found that an accurate accounting gave him a realistic idea of his business's financial direction",
			vietnamse: "Stefano thấy rằng công việc kế toán chính xác đã cho anh một ý niệm thực tế về việc quản trị tài chính trong công việc của mình",
		},
		topic: "financial statements",
	},
	{
		id: 296,
		name: "target",
		pronounce: "'tɑ:git",
		explain: "to try to have an effect on a particular group of people",
		meaning: "(v, n): (v) đặt mục tiêu nhắm vào; (n) mục tiêu, mục đích (goal)",
		example: {
			english: "We targeted March as the deadline for completing the financial statement",
			vietnamse: "Chúng tôi đặt ra mục tiêu tháng Ba là hạn chót để hoàn tất báo cáo tài chính",
		},
		topic: "financial statements",
	},
	{
		id: 297,
		name: "translation",
		pronounce: "træns'leiʃn",
		explain: "the process of changing something that is written or spoken into another language",
		meaning: "(n): bản dịch, bài dịch; ‹sự› dịch, chuyển sang, giải thích, truyền đạt",
		example: {
			english: "The translation of the statement from Japanese into English was very helpful",
			vietnamse: "Bản dịch báo cáo từ tiếng Nhật sang tiếng Anh là rất có ích",
		},
		topic: "financial statements",
	},
	{
		id: 298,
		name: "typically",
		pronounce: "ˈtɪpɪkli",
		explain: "used to say that something usually happens in the way that you are stating",
		meaning: "(adv): tiêu biểu, điển hình; đặc thù, đặc trưng, đặc tính",
		example: {
			english: "Office expenses typically include such things as salaries, rent, and office supplies",
			vietnamse: "Các chi phí văn phòng bao gồm tiêu biểu những thứ như là: tiền lương, tiền thuê và đồ dùng dự trữ văn phòng",
		},
		topic: "financial statements",
	},
	{
		id: 299,
		name: "yield",
		pronounce: "jiːld",
		explain: "the total amount of crops, profits",
		meaning: "(n, v): sản lượng; lợi tức, hoa lợi",
		example: {
			english: "The company's investment yielded high returns",
			vietnamse: "Việc đầu tư của công ty đã mang lại tiền lãi cao hơn",
		},
		topic: "financial statements",
	},
	{
		id: 300,
		name: "adjacent",
		pronounce: "ə'dʤeizənt",
		explain: "next to or near something",
		meaning: "(adj): kế bên, liền kề, sát cạnh",
		example: {
			english: "My office is adjacent to the receptionist area on the third floor",
			vietnamse: "Văn phòng của tôi ở bên cạnh khu vực tiếp tân ở tầng ba",
		},
		topic: "property & departments",
	},
	{
		id: 301,
		name: "collaboration",
		pronounce: "kə,læbə'reiʃn",
		explain: "the act of working with another person or group of people to create or produce something",
		meaning: "(n): sự cộng tác, hợp tác",
		example: {
			english: "We believe that it was our collaboration that enabled us to achieve such favorable results",
			vietnamse: "Chúng ta tin rằng sự hợp tác của chúng ta cho phép đạt được những kết quả có lợi đến thế",
		},
		topic: "property & departments",
	},
	{
		id: 302,
		name: "concentrate",
		pronounce: "'kɔnsentreit",
		explain: "to give all your attention to something and not think about anything else",
		meaning: "(v): tập trung (to focus)",
		example: {
			english: "We should concentrate our efforts on the last quarter of the year",
			vietnamse: "Chúng ta nên tập trung nỗ lực của mình vào quý cuối cùng của năm",
		},
		topic: "property & departments",
	},
	{
		id: 303,
		name: "conducive",
		pronounce: "kən'dju:vis",
		explain: "making it easy, possible, or likely for something to happen",
		meaning: "(adj): có ích, có lợi",
		example: {
			english: "The soft lights and music were conducive to a relaxed atmosphere.",
			vietnamse: "Các đèn chiếu sáng nhẹ và nhạc sẽ có ích cho một bầu không khí thoải mái.",
		},
		topic: "property & departments",
	},
	{
		id: 304,
		name: "disruption",
		pronounce: "dis'rʌpʃn",
		explain: "to make it difficult for something to continue in the normal way",
		meaning: "(n): ‹sự› đập gãy, phá vỡ; ‹sự/tình trạng› rối loạn, gián đoạn",
		example: {
			english: "If there are no disruptions, the office renovations will be finished this week",
			vietnamse: "Nếu không có gián đoạn, việc làm mới văn phòng sẽ hoàn thành trong tuần này",
		},
		topic: "property & departments",
	},
	{
		id: 305,
		name: "hamper",
		pronounce: "'hæmpə",
		explain: "to prevent someone from easily doing or achieving something",
		meaning: "(v): làm vướng, gây vướng; cản trở, gây trở ngại",
		example: {
			english: "The lack of supplies hampered our ability to finish on schedule",
			vietnamse: "Việc thiếu đồ dự trữ đã gây trở ngại cho khả năng hoàn thành đúng thời gian của chúng tôi",
		},
		topic: "property & departments",
	},
	{
		id: 306,
		name: "inconsiderately",
		pronounce: "ˌɪnkənˈsɪdərətli",
		explain: "not giving enough thought to other people''s feeling or needs",
		meaning: "(adv): thiếu thận trọng, thiếu suy nghĩ, khinh suất, sơ suất;",
		example: {
			english: "The manager inconsiderately scheduled the meeting for late Friday afternoon",
			vietnamse: "Người giám đốc sơ suất lên lịch họp vào cuối buổi chiều thứ Sáu",
		},
		topic: "property & departments",
	},
	{
		id: 307,
		name: "lobby = foyer",
		pronounce: "'lɔbi",
		explain: "a large area inside the entrance of a public building where people can meet and wait",
		meaning: "(n): hành lang, sảnh chờ, vận động hành lang",
		example: {
			english: "The reception area was moved from the lobby of the building to the third floor",
			vietnamse: "Khu vực tiếp tân đã được chuyển từ hành lang của tòa nhà lên tầng ba",
		},
		topic: "property & departments",
	},
	{
		id: 308,
		name: "move up",
		pronounce: "NA",
		explain: "to advance, improve position",
		meaning: "(v): tiến lên, thăng tiến (to advance, to improve position)",
		example: {
			english: "In order to move up in the company, employees had to demonstrate their loyalty",
			vietnamse: "Nhằm để thăng tiến trong công ty, các nhân viên phải biểu lộ lòng trung thành của họ",
		},
		topic: "property & departments",
	},
	{
		id: 309,
		name: "open to",
		pronounce: "NA",
		explain: "receptive to",
		meaning: "(adj): tiếp thu, dùng được cho ai đó (to be + open to)",
		example: {
			english: "Since the junior executive was still on probation, he was open to much scrutiny and criticism",
			vietnamse: "Bởi vì người nhân viên điều hành cấp thấp vẫn còn trong thời gian tập sự, anh hay bị săm soi và chỉ trích",
		},
		topic: "property & departments",
	},
	{
		id: 310,
		name: "opt",
		pronounce: "ɔpt",
		explain: "to choose, to decide on",
		meaning: "(v): chọn, chọn lựa; quyết định",
		example: {
			english: "The operations manager opted for the less expensive office design",
			vietnamse: "Trưởng phòng tác nghiệp đã chọn bản thiết kế văn phòng ít tốn kém",
		},
		topic: "property & departments",
	},
	{
		id: 311,
		name: "scrutiny",
		pronounce: "'skru:tini",
		explain: "careful and thorough examination",
		meaning: "(n): ‹sự› nhìn chăm chú; xem xét/kiểm tra kỹ lưỡng, nghiên cứu cẩn thận",
		example: {
			english: "Jim left his old job because he found it difficult to work under the close scrutiny of his boss",
			vietnamse: "Jim đã rời bỏ công việc cũ vì anh thấy khó làm việc dưới sự săm sõi kỹ lưỡng của sếp",
		},
		topic: "property & departments",
	},
	{
		id: 312,
		name: "adhere to",
		pronounce: "NA",
		explain: "to follow, to pay attention to",
		meaning: "(v): tuân thủ, tôn trọng triệt để, trung thành/gắn bó với, giữ vững; tham gia, gia nhập",
		example: {
			english: "The chairman never adhered to his own rules",
			vietnamse: "Vị chủ tịch chẳng bao giờ giữ vững những quy tắc của riêng ông ta",
		},
		topic: "board meeting",
	},
	{
		id: 313,
		name: "agenda",
		pronounce: "əˈdʒen.də",
		explain: "a list of items to be discussed at a meeting, the next item on the agenda is the publicity budget.",
		meaning: "(n): nhật ký công tác, chương trình nghị sự",
		example: {
			english: "The agenda was sent out three weeks ago so that everyone could prepare for the meeting",
			vietnamse: "Chương trình nghị sự đã được phân phát 3 tuần trước để cho mọi người có thể chuẩn bị cho cuộc họp",
		},
		topic: "board meeting",
	},
	{
		id: 314,
		name: "bring up",
		pronounce: "NA",
		explain: "to introduce a topic",
		meaning: "(v): Đưa ra",
		example: {
			english: "Can you bring up the main menu again?",
			vietnamse: "Bạn có thể đưa lại thực đơn cho tôi xem được không ?",
		},
		topic: "board meeting",
	},
	{
		id: 315,
		name: "conclude",
		pronounce: "kən'klu:d",
		explain: "to decide or believe something as a result of what you have heard or seen",
		meaning: "(v): chấm dứt, kết thúc, bế mạc; kết luận, quyết định",
		example: {
			english: "After long discussions, the board has concluded that the project has to be canceled",
			vietnamse: "Sau những cuộc tranh luận dài, ủy ban đã kết luận rằng dự án phải bị hủy bỏ",
		},
		topic: "board meeting",
	},
	{
		id: 316,
		name: "go ahead",
		pronounce: "NA",
		explain: "to proceed with",
		meaning: "(n, v): (v) tiến hành; (n) sự tiến bộ, sự được phép (làm gì)",
		example: {
			english: "The manager was just waiting for the go ahead from her boss before mailing the report",
			vietnamse: "Người trưởng phòng đang chờ sự cho phép từ sếp của cô ta trước khi gửi báo cáo",
		},
		topic: "board meeting",
	},
	{
		id: 317,
		name: "goal",
		pronounce: "goul",
		explain: "purpose",
		meaning: "(n): mục đích, mục tiêu; khung thành, cầu môn; bàn thắng, điểm",
		example: {
			english: "Employees are expected to analyze and evaluate their annual goals",
			vietnamse: "Các nhân viên được yêu cầu phân tích và đánh giá các mục tiêu hàng năm của họ",
		},
		topic: "board meeting",
	},
	{
		id: 318,
		name: "lengthy",
		pronounce: "'leɳθi",
		explain: "very long, and often too long, in time or size",
		meaning: "(adj): lâu, dài, dài dòng",
		example: {
			english: "After lengthy discussions, the chairperson was reelected for another term",
			vietnamse: "Sau những cuộc tranh luận dài, vị chủ tịch đã được bầu lại một nhiệm kỳ nữa",
		},
		topic: "board meeting",
	},
	{
		id: 319,
		name: "matter",
		pronounce: "'mætə",
		explain: "a subject or situation that you must consider or deal with",
		meaning: "(n): nội dung, sự kiện, chủ đề, vấn đề, việc, chuyện",
		example: {
			english: "If there are no other matters to discuss, we will conclude the meeting",
			vietnamse: "Nếu không có vấn đề nào khác để thảo luận, chúng ta sẽ kết thúc cuộc họp",
		},
		topic: "board meeting",
	},
	{
		id: 320,
		name: "periodically",
		pronounce: "ˌpɪəriˈɒdɪkli",
		explain: "happening fairly often and regularly",
		meaning: "(adv): định kỳ, thường kỳ, chu kỳ",
		example: {
			english: "The group tried to meet periodically",
			vietnamse: "Nhóm đã cố gắng gặp gỡ định kỳ",
		},
		topic: "board meeting",
	},
	{
		id: 321,
		name: "priority",
		pronounce: "priority",
		explain: "something that you think is more important than other things and should be dealt with first",
		meaning: "(n): ‹quyền/sự› ưu tiên, được xét trước",
		example: {
			english: "Since the remaining issues were not a priority, the group decided to move them to the next week's agenda",
			vietnamse: "Vì những vấn đề còn tồn tại không phải là một ưu tiên, nhóm đã quyết định dời chúng vào chương trình nghị sự tuần tới",
		},
		topic: "board meeting",
	},
	{
		id: 322,
		name: "progress",
		pronounce: "progress",
		explain: "the process of improving or developing",
		meaning: "(n): (n) ‹sự› tiến tới, tiến bộ, phát triển; ‹sự› tiến hành, tiến triển; (v) tiến tới, tiến triển",
		example: {
			english: "The executive committee asked each group to present a report showing their progress for the year",
			vietnamse: "Ủy ban chấp hành yêu cầu mỗi nhóm trình 1 báo cáo cho thấy sự tiến bộ của họ trong năm",
		},
		topic: "board meeting",
	},
	{
		id: 323,
		name: "waste",
		pronounce: "weist",
		explain: "to use more of something than is necessary or useful",
		meaning: "(v, n): (v) lãng phí; (n) sự lãng phí; đồ bỏ đi, đồ thải ra, đồ rác rưởi",
		example: {
			english: "Without a leader, the group members wasted time and energy trying to organize themselves",
			vietnamse: "Thiếu một người lãnh đạo, các thành viên nhóm đã lãng phí thời gian và công sức để cố gắng tự tổ chức",
		},
		topic: "board meeting",
	},
	{
		id: 324,
		name: "brand",
		pronounce: "brænd",
		explain: "a type of product made by a particular company",
		meaning: "(n): nhãn hiệu, nhãn hàng, chi nhánh",
		example: {
			english: "All brands of aspirin are the same",
			vietnamse: "Mọi nhãn hiệu về thuốc giảm đau aspirin là như nhau.",
		},
		topic: "quality control",
	},
	{
		id: 325,
		name: "conform",
		pronounce: "kən'fɔ:m",
		explain: "to behave and think in the same way as most other people in a group or society",
		meaning: "(v): làm cho phù hợp, làm cho thích hợp; thích nghi với, thích ứng với",
		example: {
			english: "Our safety standards conform to those established by the government",
			vietnamse: "Các tiêu chuẩn an toàn của chúng tôi phù hợp với những tiêu chuẩn được thiết lập bởi chính phủ",
		},
		topic: "quality control",
	},
	{
		id: 326,
		name: "defect",
		pronounce: "di'fekt",
		explain: "a fault in something",
		meaning: "(n): khuyết điểm, nhược điểm; thiết sót, sai sót",
		example: {
			english: "Because of a defect in stiching, the entire suit was throw out",
			vietnamse: "Bởi vì một lỗi về đường khâu, cả bộ com-lê đã phải vứt bỏ.",
		},
		topic: "quality control",
	},
	{
		id: 327,
		name: "enhance",
		pronounce: "in'hɑ:ns",
		explain: "to increase or further improve the good quality, value, or status of someone or something",
		meaning: "(v): nâng cao, tăng cường",
		example: {
			english: "Every garment must be carefully inspected for defects before it is shipped",
			vietnamse: "Mọi quần áo phải được kiểm tra lỗi cẩn thận trước khi nó được chở đi.",
		},
		topic: "quality control",
	},
	{
		id: 328,
		name: "garment",
		pronounce: "'gɑ:mənt",
		explain: "a piece of clothing",
		meaning: "(n): Quần áo",
		example: {
			english: "Portland Garment Factory was established in 2008.",
			vietnamse: "Nhà máy may ở Portland (tiểu bang của Mỹ) đã được thành lập năm 2008",
		},
		topic: "quality control",
	},
	{
		id: 329,
		name: "inspect",
		pronounce: "in'spekt",
		explain: "to look closely at something or someone, especially to check that everything is as it should be",
		meaning: "(v): thanh tra, kiểm tra, xem xét kỹ",
		example: {
			english: "Chilren's car searts are thoroughly inspected and tested for safety before being put on the market",
			vietnamse: "Chổ ngồi trên xe ô-tô của trẻ em được xem xét và kiểm nghiệm kỹ lưỡng trước khi có mặt trên thị trường.",
		},
		topic: "quality control",
	},
	{
		id: 330,
		name: "perceptive",
		pronounce: "pə'septiv",
		explain: "having or showing the ability to see or understand things quickly, especially things that are not obvious",
		meaning: "(adj): nhận thức được, cảm giác được, cảm thụ được",
		example: {
			english: "It takes a perceptive person to be a good manager",
			vietnamse: "Phải là một người có khả năng cảm nhận mới trở thành một nhà quản lý tốt.",
		},
		topic: "quality control",
	},
	{
		id: 331,
		name: "repel",
		pronounce: "ri'pel",
		explain: "to drive, push, or keep something away",
		meaning: "(v): chống lại, đẩy lùi; khước từ, cự tuyệt; làm khó chịu",
		example: {
			english: "Faulty products repel repeat customers",
			vietnamse: "Những sản phẩm lỗi lại gây khó chịu cho khách hàng.",
		},
		topic: "quality control",
	},
	{
		id: 332,
		name: "take back",
		pronounce: "NA",
		explain: "to return something",
		meaning: "(v): rút lui, rút lại; lấy lại, kéo lại, đồng ý nhận lại, chấp nhận cho ai trở lại",
		example: {
			english: "The quality inspector took the shoddy work back to the assembly line to confront the workers",
			vietnamse: "Thanh tra chất lượng đem sản phẩm xấu trở lại dây chuyền lắp ráp để đối chất với công nhân.",
		},
		topic: "quality control",
	},
	{
		id: 333,
		name: "throw out",
		pronounce: "NA",
		explain: "to dispose of",
		meaning: "(v): vứt bỏ, bỏ đi, đuổi đi",
		example: {
			english: "You'll be thrown out if you don't pay the rent.",
			vietnamse: "Bạn sẽ được đuổi ra nếu bạn không trả tiền thuê nhà.",
		},
		topic: "quality control",
	},
	{
		id: 334,
		name: "uniformly",
		pronounce: "ˌjuːnɪˈfɔːmət",
		explain: "the same in all parts and at all times",
		meaning: "(adv): đồng đều thống nhất, không thay đổi",
		example: {
			english: "The principles were applied uniformly across all the departments",
			vietnamse: "Các nguyên tắc được áp dụng thống nhất trên tất cả các phòng ban",
		},
		topic: "quality control",
	},
	{
		id: 335,
		name: "wrinkle",
		pronounce: "'riɳkl",
		explain: "a line or small fold in your skin, especially on your face, that forms as you get older",
		meaning: "(n): ‹vếp/nếp› nhăn, nhàu",
		example: {
			english: "A wrinkle in the finish can be repaired more economically before a sale than after",
			vietnamse: "Một vết nhăn trong (sản phẩm) hoàn chỉnh thì có thể sửa chữa trước khi bán có giá hơn là sau đó.",
		},
		topic: "quality control",
	},
	{
		id: 336,
		name: "anxious",
		pronounce: "'æɳkʃəs",
		explain: "feeling worried or nervous",
		meaning: "(adj): lo âu, băn khoăn",
		example: {
			english: "He seemed anxious about the meeting",
			vietnamse: "Anh ấy có vẻ lo âu về buổi họp",
		},
		topic: "product development",
	},
	{
		id: 337,
		name: "ascertain",
		pronounce: ",æsə'tein",
		explain: "to find out the true or correct information about something",
		meaning: "(v): biết chắc, xác định rõ ràng, tìm hiểu chắc chắn",
		example: {
			english: "A necessary part of product development is to ascertain whether the product is safe",
			vietnamse: "Một việc cần thiết cho sự phát triển sản phẩm là biết chắc sản phẩm có an toàn hay không",
		},
		topic: "product development",
	},
	{
		id: 338,
		name: "assume",
		pronounce: "ə'sju:m",
		explain: "to think or accept that something is true but without having proof of it",
		meaning: "(v): giả sử, cho rằng; đảm đương, gánh vác; thừa nhận, cho là đúng",
		example: {
			english: "The young man felt ready to assume the new responsibilities of his promotion",
			vietnamse: "Người thanh niên cảm thấy đã sẵn sàng gánh vác trách nhiệm mới của việc đề bạt mình",
		},
		topic: "product development",
	},
	{
		id: 339,
		name: "decade",
		pronounce: "'dekeid",
		explain: "a period of ten years, especially a period such as 1910–1919 or 1990–1999",
		meaning: "(n): thập niên, thập kỷ; bộ mười, nhóm mười",
		example: {
			english: "Each decade seems to have its own fad products",
			vietnamse: "Mỗi thập kỷ dường như có những sản phẩm mốt nhất thời riêng của nó",
		},
		topic: "product development",
	},
	{
		id: 340,
		name: "examine",
		pronounce: "ig'zæmin",
		explain: "to consider or study an idea, a subject, etc. very carefully",
		meaning: "(v): khám xét, xem xét; khảo sát, nghiên cứu; hỏi thi, sát hạch, thẩm vấn",
		example: {
			english: "Before marketing a new product, researchers must carefully examine it from every aspect",
			vietnamse: "Trước khi tiếp thị sản phẩm mới, nhà nghiên cứu phải khảo sát cẩn thận nó từ mọi khía cạnh",
		},
		topic: "product development",
	},
	{
		id: 341,
		name: "experiment",
		pronounce: "iks'periment - iks'periment",
		explain: "a scientific test that is done in order to study what happens and to gain new knowledge",
		meaning: "(v, n): (v) làm thí nghiệm; (n) cuộc thí nghiệm, sự thí nghiệm, sự thử",
		example: {
			english: "Product developers must conduct hundreds of experiments in their research",
			vietnamse: "Các nhà phát triển sản phẩm phải làm hàng trăm thử nghiệm về sự nghiên cứu của họ",
		},
		topic: "product development",
	},
	{
		id: 342,
		name: "logical",
		pronounce: "'lɔdʤikəl",
		explain: "seeming natural, reasonable. or sensible",
		meaning: "(adj): hợp lý, hợp với lôgic, theo lôgic",
		example: {
			english: "In addition to logical thinkers, a good research and development team should include a few dreamers",
			vietnamse: "Để bổ sung cho những người suy nghĩ theo lôgic, một đội nghiên cứu và phát triển SP giỏi nên bao gồm một vài người suy nghĩ mơ mộng",
		},
		topic: "product development",
	},
	{
		id: 343,
		name: "research",
		pronounce: "ri'sə:tʃ",
		explain: "a careful study of a subject",
		meaning: "(n): sự nghiên cứu",
		example: {
			english: "For toy manufacturers, research can be pure fun",
			vietnamse: "Đối với các nhà sản xuất đồ chơi, việc nghiên cứu có thể là vui chơi thuần túy",
		},
		topic: "product development",
	},
	{
		id: 344,
		name: "responsibility",
		pronounce: "ris,pɔnsə'biliti",
		explain: "a duty to deal with or take care of someone or something, so that it is your fault if something goes wrong",
		meaning: "(n): trách nhiệm, bổn phận",
		example: {
			english: "The product development department has a huge responsibility to be sure that the product is safe, even if used improperly",
			vietnamse: "Bộ phận phát triển sản phẩm có một trách nhiệm to lớn là phải chắc rằng sản phẩm là an toàn, cho dù là sử dụng không đúng cách",
		},
		topic: "product development",
	},
	{
		id: 345,
		name: "solve",
		pronounce: "sɔlv",
		explain: "to find a way of dealing with a problem or difficult situation",
		meaning: "(v): giải, giải quyết, làm sáng tỏ",
		example: {
			english: "Researchers find that every time they solve one problem, two more result",
			vietnamse: "Các nhà nghiên cứu thấy rằng mỗi lần họ giải quyết 1 vấn đề, (sẽ có) hơn 2 kết quả",
		},
		topic: "product development",
	},
	{
		id: 346,
		name: "supervisor",
		pronounce: "'sju:pəvaizə",
		explain: "an daministrator in charge",
		meaning: "(n): người giám sát",
		example: {
			english: "A good supervisor gets his team to work with him, not just for him",
			vietnamse: "Một giám sát giỏi khiến cho đội ngũ của anh ta làm việc với anh ta, không chỉ cho anh ta",
		},
		topic: "product development",
	},
	{
		id: 347,
		name: "systematically",
		pronounce: "ˌsɪstəˈmætɪkli",
		explain: "done according to a system or plan",
		meaning: "(adv): có hệ thống, có phương pháp (methodically)",
		example: {
			english: "While creative thinking is necessary, analyzing a problem systematically is indispensable",
			vietnamse: "Trong khi mà sự suy nghĩ sáng tạo là cần thiết, thì việc phân tích một vấn đề một cách có hệ thống là không thể thiếu được",
		},
		topic: "product development",
	},
	{
		id: 348,
		name: "apprehensive",
		pronounce: ",æpri'hensiv",
		explain: "worried or frightened that something unpleasant may happen",
		meaning: "(adj): sợ hãi, e sợ; hiểu rõ, cảm thấy rõ, tiếp thu nhanh",
		example: {
			english: "The mortgage lender was apprehensive about the company's ability to pay",
			vietnamse: "Người cho vay thế chấp e ngại về khả năng thanh toán của công ty",
		},
		topic: "renting & leasing",
	},
	{
		id: 349,
		name: "circumstance",
		pronounce: "'sə:kəmstəns",
		explain: "the conditions and facts that are connected with and affect a situation, an event, or an action",
		meaning: "(n): trường hợp, hoàn cảnh, tình huống",
		example: {
			english: "Under the current economic circumstances, they will not be able to purchase the property",
			vietnamse: "Trong tình cảnh kinh tế hiện tại, họ không có khả năng mua sắm tài sản",
		},
		topic: "renting & leasing",
	},
	{
		id: 350,
		name: "condition",
		pronounce: "kən'diʃn",
		explain: "the state that something is in",
		meaning: "(n): điều kiện; hoàn cảnh, tình thế, tình trạng, trạng thái",
		example: {
			english: "Except for some minor repairs, the building is in very good condition",
			vietnamse: "Trừ một vài tu chữa nhỏ, tòa nhà đang ở trong tình trạng rất tốt",
		},
		topic: "renting & leasing",
	},
	{
		id: 351,
		name: "due to",
		pronounce: "NA",
		explain: "because of",
		meaning: "(perp): bởi, vì, do, tại, nhờ có",
		example: {
			english: "Due to the low interest rates, good office space is difficult to find",
			vietnamse: "Vì mức lợi nhuận thấp, địa điểm văn phòng tốt rất khó tìm ra",
		},
		topic: "renting & leasing",
	},
	{
		id: 352,
		name: "fluctuate",
		pronounce: "fluctuate",
		explain: "to change frequently in size, amount, quality, etc., especially from one extreme to another",
		meaning: "(v): dao động, lên xuống, thay đổi thất thường",
		example: {
			english: "No one is very comfortable making a large investment while the currency values fluctuate almost daily",
			vietnamse: "Không ai thấy thật yên tâm thực hiện một đầu tư lớn trong khi giá trị tiền tệ dao động như cơm bữa",
		},
		topic: "renting & leasing",
	},
	{
		id: 353,
		name: "get out of",
		pronounce: "NA",
		explain: "to exit, escape",
		meaning: "(v): thôi, mất, bỏ, từ bỏ, rời bỏ, tránh né, thoát khỏi",
		example: {
			english: "The company wanted to get out of the area before property values declined even further",
			vietnamse: "Công ty muốn từ bỏ khu vực trước khi giá trị tài sản suy sụp thậm chí còn nhiều hơn nữa",
		},
		topic: "renting & leasing",
	},
	{
		id: 354,
		name: "indicator",
		pronounce: "indikeitə",
		explain: "a sign that shows you what something is like or how a situation is changing",
		meaning: "(n): ‹người/vật/chất› chỉ, chỉ thị (VD: đồng hồ chỉ thị, đèn xi-nhan)",
		example: {
			english: "If the economy is an accurate indicator, rental prices will increase rapidly in the next six months",
			vietnamse: "Nếu nền kinh tế là chỉ báo chính xác, tiền thuê (nhà) sẽ tăng nhanh chóng trong 6 tháng tới",
		},
		topic: "renting & leasing",
	},
	{
		id: 355,
		name: "lease",
		pronounce: "li:s",
		explain: "a legal agreement that allows you to use a car, a building",
		meaning: "(n, v): (n) hợp đồng cho thuê; (v) cho thuê",
		example: {
			english: "They decided to lease the property rather than buy it",
			vietnamse: "Họ đã quyết định đi thuê tài sản thay vì mua nó",
		},
		topic: "renting & leasing",
	},
	{
		id: 356,
		name: "lock into",
		pronounce: "NA",
		explain: "to commit, to be unable to change",
		meaning: "(v): nhốt, giam; ràng buộc chặt, không thể thay đổi",
		example: {
			english: "Before you lock yourself into something, check all your options",
			vietnamse: "Trước khi bạn tự ràng buộc mình vào cái gì, hãy xem xét mọi chọn lựa của mình",
		},
		topic: "renting & leasing",
	},
	{
		id: 357,
		name: "occupy",
		pronounce: "'ɔkjupai",
		explain: "to fill or use a space, an area, or an amount of time",
		meaning: "(v): sở hữu, chiếm hữu; chiếm giữ, chiếm đóng",
		example: {
			english: "Our company has occupied this office for more than five years",
			vietnamse: "Công ty chúng tôi đã ở văn phòng này hơn 5 năm",
		},
		topic: "renting & leasing",
	},
	{
		id: 358,
		name: "option",
		pronounce: "ˈɑpʃn",
		explain: "something that you can choose to have or do",
		meaning: "(n): sự/quyền lựa chọn; vật/điều được chọn; tùy chọn",
		example: {
			english: "With the real estate market so tight right now, you don't have that many options",
			vietnamse: "Với thị trường BĐS khan hiếm đến vậy vào lúc này, anh không có nhiều chọn lựa đến vậy",
		},
		topic: "renting & leasing",
	},
	{
		id: 359,
		name: "subject to",
		pronounce: "NA",
		explain: "under legal power, dependent",
		meaning: "(adj): lệ thuộc vào, tùy theo; tuân thủ",
		example: {
			english: "This contract is subject to all the laws and regulations of the state",
			vietnamse: "Hợp đồng này tuân thủ mọi luật lệ và nguyên tắc của nhà nước",
		},
		topic: "renting & leasing",
	},
	{
		id: 360,
		name: "appeal",
		pronounce: "ə'pi:l",
		explain: "the ability to attract",
		meaning: "(n): ‹lời› kêu gọi, cầu khẩn; ‹sức› hấp dẫn, lôi cuốn, thu hút, quyến rũ",
		example: {
			english: "A restaurant with good food and reasonable prices has a lot of appeal",
			vietnamse: "Một nhà hàng có thức ăn ngon và giá cả phải chăng có sức hút rất mạnh",
		},
		topic: "selecting a restaurant",
	},
	{
		id: 361,
		name: "arrive",
		pronounce: "ə'raiv",
		explain: "to reach a destination",
		meaning: "(v): đến, đi đến, tới nơi",
		example: {
			english: "By the time our meal arrived, it was cold",
			vietnamse: "Vào lúc mà thức ăn của chúng tôi được đem tới, nó đã nguội lạnh",
		},
		topic: "selecting a restaurant",
	},
	{
		id: 362,
		name: "compromise",
		pronounce: "'kɔmprəmaiz",
		explain: "an agreement made between two people or groups in which each side gives up some of the things they want so that both sides are happy at the end",
		meaning: "(n, v): (n) sự thỏa hiệp; (v) thỏa hiệp, dàn xếp",
		example: {
			english: "John doesn't like sweet dishes so I compromised by adding just a small amount of sugar",
			vietnamse: "John không thích các món ăn ngọt vì vậy tôi đã thỏa hiệp bằng cách chỉ thêm một ít đường",
		},
		topic: "selecting a restaurant",
	},
	{
		id: 363,
		name: "daringly",
		pronounce: "ˈdeərɪŋ",
		explain: "brave; willing to do dangerous",
		meaning: "(adj): táo bạo, cả gan, phiêu lưu, dũng cảm (bravely)",
		example: {
			english: "We daringly ordered the raw squid",
			vietnamse: "Chúng tôi cả gan gọi món mực sống",
		},
		topic: "selecting a restaurant",
	},
	{
		id: 364,
		name: "familiar",
		pronounce: "fə'miljə",
		explain: "well known to you",
		meaning: "(adj): quen, quen thuộc, thân thuộc, phổ biến, tương tự",
		example: {
			english: "It's nice to see some familiar items on the menu",
			vietnamse: "Thật là hay khi thấy vài món ăn quen thuộc trong thực đơn",
		},
		topic: "selecting a restaurant",
	},
	{
		id: 365,
		name: "guide",
		pronounce: "ɡaɪd",
		explain: "a person who shows other people the way to a place",
		meaning: "(n): người hướng dẫn, người chỉ dẫn; sách hướng dẫn, biển chỉ dẫn",
		example: {
			english: "I don't know where to go, so why don't we consult the guide",
			vietnamse: "Tôi không biết đi đâu, vậy thì sao chúng ta không hỏi ý kiến hướng dẫn viên",
		},
		topic: "selecting a restaurant",
	},
	{
		id: 366,
		name: "majority",
		pronounce: "mə'dʤɔriti",
		explain: "the largest part of a group of people or things",
		meaning: "(n): đa số, phần lớn",
		example: {
			english: "The majority of the group wanted to try the new Chinese restaurant",
			vietnamse: "Phần lớn nhóm muốn đi ăn thử ở nhà hàng Trung Quốc mới",
		},
		topic: "selecting a restaurant",
	},
	{
		id: 367,
		name: "mix",
		pronounce: "miks",
		explain: "if two or more substances mix or you mix them, they combine, usually in a way that means they cannot easily be separated",
		meaning: "(v, n): (v) trộn lẫn, pha lẫn; (n) sự kết hợp, hỗn hợp, sự hòa hợp",
		example: {
			english: "The mix of bright colors on the plate was very pleasing",
			vietnamse: "Sự pha trộn các màu sáng ở trên đĩa thì rất thú vị",
		},
		topic: "selecting a restaurant",
	},
	{
		id: 368,
		name: "rely",
		pronounce: "ri'lai",
		explain: "to need or depend on someone or something",
		meaning: "(v): dựa vào, tin cậy vào",
		example: {
			english: "I seldom rely on the restaurant reviews in the paper when choosing a restaurant",
			vietnamse: "Tôi hiếm khi tin vào bài đánh giá nhà hàng ở trên báo mỗi khi chọn lựa một nhà hàng",
		},
		topic: "selecting a restaurant",
	},
	{
		id: 369,
		name: "secure",
		pronounce: "si'kjuə",
		explain: "feeling happy and confident about yourself or a particular situation",
		meaning: "(v): an toàn, an ninh; bảo đảm",
		example: {
			english: "The hostess secured us another chair, so we could eat together",
			vietnamse: "Bà chủ tiệc đã tìm được cho chúng tôi cái ghế khác, vì vậy chúng tôi có thể ăn cùng nhau",
		},
		topic: "selecting a restaurant",
	},
	{
		id: 370,
		name: "subjective",
		pronounce: "səb'dʤektiv",
		explain: "based on your own ideas or opinions rather than facts, and therefore sometimes unfair",
		meaning: "(adj): chủ quan; tưởng tượng, có tính tưởng tượng",
		example: {
			english: "The reviews in this guidebook are highly subjective, but fun to read",
			vietnamse: "Những bài đánh giá trong sách hướng dẫn này rất là chủ quan, nhưng đọc cũng vui",
		},
		topic: "selecting a restaurant",
	},
	{
		id: 371,
		name: "suggestion",
		pronounce: "sə'dʤestʃn",
		explain: "an idea or a plan that you mention for someone else to think about",
		meaning: "(n): đề nghị, ý kiến, sự gợi ý",
		example: {
			english: "Can I make a suggestion about what to order?",
			vietnamse: "Tôi có thể đề nghị về việc gọi món gì hay không?",
		},
		topic: "selecting a restaurant",
	},
	{
		id: 372,
		name: "basis",
		pronounce: "'beisis",
		explain: "the reason why people make a particular choice",
		meaning: "(adj): cơ bản, cơ sở",
		example: {
			english: "The new restaurant offers a very basic menu",
			vietnamse: "Nhà hàng mới đưa ra một thực đơn rất là cơ bản",
		},
		topic: "eating out",
	},
	{
		id: 373,
		name: "complete",
		pronounce: "kəm'pli:t",
		explain: "to finish making or doing something",
		meaning: "(v): ‹làm/làm cho› hoàn toàn, đầy đủ, trọn vẹn; hoàn thành, xong",
		example: {
			english: "We ordered some dessert to complete our meal",
			vietnamse: "Chúng tôi gọi một ít món tráng miệng để trọn vẹn bữa ăn của mình",
		},
		topic: "eating out",
	},
	{
		id: 374,
		name: "excite",
		pronounce: "ik'sait",
		explain: "to make someone feel very pleased, interested or enthusiastic",
		meaning: "(v): kích thích, kích động, khuấy động",
		example: {
			english: "Exotic flavor always excite me",
			vietnamse: "Những hương vị lạ/ngoại nhập luôn luôn kích thích tôi",
		},
		topic: "eating out",
	},
	{
		id: 375,
		name: "flavor",
		pronounce: "'fleivə",
		explain: "a substance added to food or drink to give it a particular flavour",
		meaning: "(n): mùi vị, hương vị, mùi thơm phảng phất",
		example: {
			english: "The cook changed the flavor of the soup with a unique blend of herbs",
			vietnamse: "Người nấu bếp thay đổi mùi vị món súp bằng một sự pha trộn các loại cây cỏ độc đáo",
		},
		topic: "eating out",
	},
	{
		id: 376,
		name: "forget",
		pronounce: "fə'get",
		explain: "to be unable to remember something",
		meaning: "(v): quên",
		example: {
			english: "The waiter forgot to bring the rolls, annoying the customer",
			vietnamse: "Anh nhân viên phục vụ quên mang các ổ bánh mì, gây bực mình cho người khách",
		},
		topic: "eating out",
	},
	{
		id: 377,
		name: "ingredient",
		pronounce: "in'gri:djənt",
		explain: "one of the things from which something is made, especially one of the foods",
		meaning: "(n): thành phần, thành tố, phần hợp thành",
		example: {
			english: "I was unfamiliar with some of the ingredients in the dish",
			vietnamse: "Tôi không quen với một vài thành phần trong món ăn",
		},
		topic: "eating out",
	},
	{
		id: 378,
		name: "judge",
		pronounce: "'dʤʌdʤ",
		explain: "to form an opinion about somebody / something",
		meaning: "(v): xét xử, phân xử, xét đoán, phán đoán; đánh giá, cho rằng",
		example: {
			english: "The restaurant review harshly judged the quality of the service",
			vietnamse: "Bài nhận xét nhà hàng đã nhận xét gay gắt về chất lượng dịch vụ",
		},
		topic: "eating out",
	},
	{
		id: 379,
		name: "Mix-up",
		pronounce: "'miks'ʌp",
		explain: "a situation that is full of confusion, especially because somebody has made a mistake",
		meaning: "(n): ‹sự› lộn xộn, hỗn độn, hỗn loạn; cuộc đánh lộn",
		example: {
			english: "There was a mix-up about the ingredients and the dish was ruined",
			vietnamse: "Đã có một sự lộn xộn về các thành phần và món ăn đã bị hỏng",
		},
		topic: "eating out",
	},
	{
		id: 380,
		name: "patron",
		pronounce: "'peitrən",
		explain: "a person who gives money and support to artists and writers",
		meaning: "(n): người bảo trợ, người đỡ đầu, ông bầu, ông chủ; khách hàng quen",
		example: {
			english: "This restaurant has many loyal patrons",
			vietnamse: "Nhà hàng này có nhiều người khách hàng quen rất trung thành",
		},
		topic: "eating out",
	},
	{
		id: 381,
		name: "predict",
		pronounce: "pri'dikt",
		explain: "to say that something will happen in the future",
		meaning: "(v): nói trước, dự đoán, dự báo, tiên tri",
		example: {
			english: "I predicted this restaurant would become popuplar and I was right",
			vietnamse: "Tôi đã dự đoán (rằng) nhà hàng này sẽ trở nên nổi tiếng và tôi đã đúng",
		},
		topic: "eating out",
	},
	{
		id: 382,
		name: "randomly",
		pronounce: "ˈrændəmli",
		explain: "done, without somebody deciding in advance what is going to happen, or without any regular pattern",
		meaning: "(adv): ‹một cách› ngẫu nhiên, tình cờ, hú họa",
		example: {
			english: "We randomly made our selections from the menu",
			vietnamse: "Chúng tôi chọn đại (các món ăn) từ thực đơn",
		},
		topic: "eating out",
	},
	{
		id: 383,
		name: "remind",
		pronounce: "ri'maind",
		explain: "to help someone remember something",
		meaning: "(v): nhắc nhở, làm nhớ lại",
		example: {
			english: "I remind the client that we are meeting for dinner tomorrow",
			vietnamse: "Tôi nhắc người khách rằng chúng tôi sẽ gặp nhau để đi ăn vào ngày mai",
		},
		topic: "eating out",
	},
	{
		id: 384,
		name: "burden",
		pronounce: "'bə:dn",
		explain: "a duty, responsibility, etc. that causes worry, difficulty, or hard work",
		meaning: "(n): gánh nặng (đen & bóng), gánh trách nhiệm",
		example: {
			english: "The secretary usually takes on the burden of ordering lunch for business meetings",
			vietnamse: "Người thư ký thường gánh trách nhiệm đặt bữa trưa cho những cuộc họp làm ăn",
		},
		topic: "ordering lunch",
	},
	{
		id: 385,
		name: "commonly",
		pronounce: "'kɔmənli",
		explain: "usually; very often; by most people",
		meaning: "(adv): thường thường, thông thường, bình thường",
		example: {
			english: "The restaurants in this area commonly serve office workers and are only open during the week",
			vietnamse: "Nhà hàng trong khu này thường phục vụ nhân viên văn phòng và thường mở cửa suốt tuần",
		},
		topic: "ordering lunch",
	},
	{
		id: 386,
		name: "delivery",
		pronounce: "di'livəri",
		explain: "the act of taking goods, letters, etc. to the people they have been sent to",
		meaning: "(n): ‹sự› giao hàng, phân phát, phân phối",
		example: {
			english: "The caterer hired a courier to make the delivery",
			vietnamse: "Nhà cung cấp thực phẩm đã thuê một người đưa tin để thực hiện việc giao hàng",
		},
		topic: "ordering lunch",
	},
	{
		id: 387,
		name: "elegance",
		pronounce: "'eligəns",
		explain: "attractive and showing a good sense of syle",
		meaning: "(n): ‹tính/sự› thanh lịch, tao nhã",
		example: {
			english: "The elegance of the restaurant made it a pleasant place to eat",
			vietnamse: "Sự thanh lịch của nhà hàng khiến nó là một nơi thú vị để ăn uống",
		},
		topic: "ordering lunch",
	},
	{
		id: 388,
		name: "fall to",
		pronounce: "NA",
		explain: "to become one's responsibilities",
		meaning: "(v): bắt đầu vào việc, bắt tay vào việc; rơi vào tay của, trở thành trách nhiệm của",
		example: {
			english: "The task of preparing the meal fell to the assistant chef when the chief chef was ill",
			vietnamse: "Nhiệm vụ nấu ăn rơi vào tay của phụ bếp khi mà người đầu bếp bị bệnh",
		},
		topic: "ordering lunch",
	},
	{
		id: 389,
		name: "impress",
		pronounce: "im'pres",
		explain: "if a person or thing impresses you, you feel admiration for them or it",
		meaning: "(v): gây ấn tượng, khắc sâu, ghi sâu",
		example: {
			english: "I was impressed with how quickly they delivered our lunch",
			vietnamse: "Tôi bị ấn tượng với việc họ phân phát bữa trưa của chúng tôi nhanh chóng đến vậy",
		},
		topic: "ordering lunch",
	},
	{
		id: 390,
		name: "individual",
		pronounce: ",indi'vidjuəl",
		explain: "considered separately rather than as part of a group",
		meaning: "(adj): cá nhân, riêng, riêng lẻ; riêng biệt, đặc biệt, độc đáo;",
		example: {
			english: "We had the delivery man mark the contents of each individual order",
			vietnamse: "Chúng tôi đã được người giao hàng đánh dấu nội dung cho mỗi đơn hàng riêng biệt",
		},
		topic: "ordering lunch",
	},
	{
		id: 391,
		name: "list",
		pronounce: "list",
		explain: "a series of names, items, figures, etc., especially when they are written or printed",
		meaning: "(n): danh sách, bản kê khai",
		example: {
			english: "We keep a list of all the restaurants in this area that deliver",
			vietnamse: "Chúng tôi giữ một danh sách các nhà hàng có giao hàng trong khu vực này",
		},
		topic: "ordering lunch",
	},
	{
		id: 392,
		name: "multiple",
		pronounce: "'mʌltipl",
		explain: "many in number; involving many different people or things",
		meaning: "(adj): nhân; nhiều, nhiều mối, nhiều phần",
		example: {
			english: "a house in multiple ownership/occupancy (= owned/occupied by several different people or families)",
			vietnamse: "một ngôi nhà có nhiều quyền sở hữu/người ở (= được sở hữu/ở bởi nhiều người hoặc gia đình khác nhau)",
		},
		topic: "ordering lunch",
	},
	{
		id: 393,
		name: "narrow",
		pronounce: "'nærou",
		explain: "to become or make something narrower",
		meaning: "(v): chật, hẹp; hạn chế; kỹ, tỉ mỉ",
		example: {
			english: "This restaurant delivers only pizza and sandwiches, so that certainly narrows down the choices",
			vietnamse: "Nhà hàng này chỉ giao hàng pizza và sandwich, hẳn nhiên là đã làm thu hẹp các chọn lựa",
		},
		topic: "ordering lunch",
	},
	{
		id: 394,
		name: "pick up",
		pronounce: "'pikʌp",
		explain: "to take on passengers or freight",
		meaning: "(v): đón (ai đó)",
		example: {
			english: "I'll pick you up at fiveo'clock.",
			vietnamse: "Tôi sẽ đón bạn lúc 5 giờ",
		},
		topic: "ordering lunch",
	},
	{
		id: 395,
		name: "settle",
		pronounce: "'setl",
		explain: "to put an end to an argument or a disagreement",
		meaning: "(v): ngồi, đậu, bố trí, định cư, làm ăn sinh sống; giải quyết, hòa giải, dàn xếp",
		example: {
			english: "We settle the bill with the cashier",
			vietnamse: "Chúng tôi thanh toán hóa đơn với người thủ quỹ",
		},
		topic: "ordering lunch",
	},
	{
		id: 396,
		name: "accustom to",
		pronounce: "NA",
		explain: "to become familiar with",
		meaning: "(n): làm cho quen, tập cho quen",
		example: {
			english: "Chefs must accustom themselves to working long hours",
			vietnamse: "Các đầu bếp phải tự làm quen với việc nấu nướng trong nhiều giờ",
		},
		topic: "cooking as a career",
	},
	{
		id: 397,
		name: "apprentice",
		pronounce: "ə'prentis",
		explain: "a young person who works for an employer for a fixed period of time in order to learn the particular skills needed in their job",
		meaning: "(n): người học việc, người mới vào nghề, người tập sự",
		example: {
			english: "The cooking school has an apprentice program that places students in restaurants to gain work experience",
			vietnamse: "Trường dạy nấu ăn có một chương trình học nghề là đưa học viên đến các nhà hàng để lấy kinh nghiệm làm việc",
		},
		topic: "cooking as a career",
	},
	{
		id: 398,
		name: "culinary",
		pronounce: "'kʌlinəri",
		explain: "connected with cooking or food",
		meaning: "(adj): (thuộc) nấu nướng, bếp núc",
		example: {
			english: "The chef was widely known for his culinary artistry",
			vietnamse: "Người đầu biết được biết đến rộng rãi về nghệ thuật thuật ẩm thực của ông ấy",
		},
		topic: "cooking as a career",
	},
	{
		id: 399,
		name: "demand",
		pronounce: "dɪˈmɑːnd",
		explain: "to ask for something very firmly",
		meaning: "(v, n): đòi hỏi, yêu cầu; cần phải",
		example: {
			english: "This style of cooking demands many exotic ingredients and a lot of preparation time",
			vietnamse: "Kiểu nấu ăn này đòi hỏi nhiều thành phần (thực phẩm) lạ và nhiều thời gian chuẩn bị",
		},
		topic: "cooking as a career",
	},
	{
		id: 400,
		name: "draw",
		pronounce: "drɔ:",
		explain: "to attract or interest someone",
		meaning: "(v): vẽ, vạch, thảo ra; kéo, lôi kéo, thu hút, lôi cuốn",
		example: {
			english: "Matthew was drawn to a career in cooking",
			vietnamse: "Matthew đã bị lôi cuốn với công việc nấu ăn",
		},
		topic: "cooking as a career",
	},
	{
		id: 401,
		name: "incorporate",
		pronounce: "in'kɔ:pərit",
		explain: "to include something so that it forms a part of something",
		meaning: "(v): kết hợp chặt chẽ; hợp thành tổ chức/đoàn thể",
		example: {
			english: "Here are the fresh greens for you to incorporate into a salad",
			vietnamse: "Đây là rau tươi cho anh để kết hợp thành một món salad (rau trộn)",
		},
		topic: "cooking as a career",
	},
	{
		id: 402,
		name: "influx",
		pronounce: "'inflʌks",
		explain: "the fact of a lot of people, money, or things arriving somewhere",
		meaning: "(n): sự chảy vào, sự tràn vào; luồng đi vào, dòng đi vào",
		example: {
			english: "Due to the rise in popularity of cooking as a career, cooking schools report an influx of applications",
			vietnamse: "Vì việc gia tăng sự phổ biến của nghề nấu ăn, các trường dạy nấu ăn báo cáo một dòng chảy các đơn xin nhập học.",
		},
		topic: "cooking as a career",
	},
	{
		id: 403,
		name: "method",
		pronounce: "'meθəd",
		explain: "a particular way of doing something",
		meaning: "(n): phương pháp, cách thức",
		example: {
			english: "Gloria perfected a simple method for making croissants",
			vietnamse: "Gloria đã hoàn thành một phương pháp đơn giản để làm bánh sừng bò",
		},
		topic: "cooking as a career",
	},
	{
		id: 404,
		name: "outlet",
		pronounce: "'autlet",
		explain: "a way of expressing or making good use of strong feelings, ideas, or energy",
		meaning: "(n): chỗ thoát ra, lối ra, lối thoát; phương tiện để thỏa mãn",
		example: {
			english: "Many people find cooking to be a hands-on outlet for their creativity",
			vietnamse: "Nhiều người xem nấu ăn là một phương tiện thực hành để thỏa mãn óc sáng tạo của mình",
		},
		topic: "cooking as a career",
	},
	{
		id: 405,
		name: "profession",
		pronounce: "profession",
		explain: "a type of job that needs special training or skill, especially one that needs a high level of education",
		meaning: "(n): nghề, nghề nghiệp",
		example: {
			english: "Cooking is considered as much a profession as is law or medicine",
			vietnamse: "Nấu ăn được xem là một nghề nghiệp cũng như là nghề luật hay nghề y",
		},
		topic: "cooking as a career",
	},
	{
		id: 406,
		name: "relinquish",
		pronounce: "ri'liɳkwiʃ",
		explain: "to stop having something, especially when this happens unwillingly",
		meaning: "(v): bỏ, từ bỏ; buông, thả",
		example: {
			english: "After Claude married Kiki, he had to relinquish his exclusive hold on the kitchen and learn to share the joys of cooking",
			vietnamse: "Sau khi Claude lấy Kiki, anh ta đã phải từ bỏ độc quyền nắm giữ nhà bếp và biết chia sẻ niềm vui nấu nướng",
		},
		topic: "cooking as a career",
	},
	{
		id: 407,
		name: "theme",
		pronounce: "θi:m",
		explain: "the subject or main idea in a talk, piece of writing, or work of art",
		meaning: "(n): chủ đề, đề tài",
		example: {
			english: "North American literature is the main theme of this year's festival.",
			vietnamse: "Văn học Bắc Mỹ là chủ đề chính của lễ hội năm nay.",
		},
		topic: "cooking as a career",
	},
	{
		id: 408,
		name: "assist",
		pronounce: "ə'sist",
		explain: "to help someone to do something",
		meaning: "(v): giúp, giúp đỡ, trợ giúp",
		example: {
			english: "Bonnie hired a secretary to assist her with the many details of the event",
			vietnamse: "Bonnie đã thuê một thư ký để trợ giúp cô về rất nhiều chi tiết của sự kiện",
		},
		topic: "events",
	},
	{
		id: 409,
		name: "coordinate",
		pronounce: "koʊˈɔrdnˌeɪt",
		explain: "to organize the different parts of an activity and the people involved in it so that it works well",
		meaning: "(v): phối hợp, kết hợp",
		example: {
			english: "Benet tried to coordinate all departments to make sure the event ran smoothly",
			vietnamse: "Benet cố gắng kết hợp với tất cả các bộ phận để bảo đảm sự kiện sẽ vận hành trơn tru",
		},
		topic: "events",
	},
	{
		id: 410,
		name: "dimension",
		pronounce: "di'menʃn",
		explain: "a measurement in space, for example the height, width, or length of something",
		meaning: "(n): kích thước, chiều, cỡ, khổ",
		example: {
			english: "What are the dimensions of the ballroom?",
			vietnamse: "Kích thước của phòng nhảy ra sao?",
		},
		topic: "events",
	},
	{
		id: 411,
		name: "exact",
		pronounce: "ig'zækt",
		explain: "correct in every detail",
		meaning: "(adj): chính xác, đúng, đúng đắn",
		example: {
			english: "We will need an exact head count by noon tomorrow",
			vietnamse: "Chúng tôi cần biết tổng số đầu người chính xác trước trưa ngày mai",
		},
		topic: "events",
	},
	{
		id: 412,
		name: "general",
		pronounce: "'dʤenərəl",
		explain: "affecting all or most people, places, or things",
		meaning: "(adj): chung, tổng quát, toàn thể",
		example: {
			english: "We have a general idea of how many guests will attend",
			vietnamse: "Chúng tôi có một hình dung chung chung về việc có bao nhiêu vị khách sẽ tham dự",
		},
		topic: "events",
	},
	{
		id: 413,
		name: "ideally",
		pronounce: "ai'diəli",
		explain: "perfect; most suitable",
		meaning: "(adj): lý tưởng, đúng như lý tưởng, theo lý tưởng",
		example: {
			english: "Ideally, the location for the concert would have plenty of parking",
			vietnamse: "Lý tưởng chổ địa điểm cho buổi hòa nhạc nên có nhiều chỗ đậu xe",
		},
		topic: "events",
	},
	{
		id: 414,
		name: "lead time",
		pronounce: "NA",
		explain: "the time between starting and completing a production process",
		meaning: "(n): khoảng thời gian ở giữa sự bắt đầu và sự hoàn thành của một quá trình",
		example: {
			english: "The lead time for reservations is unrealistic",
			vietnamse: "Khoảng thời gian cho quá trình đặt chỗ diễn ra là phi thực tế",
		},
		topic: "events",
	},
	{
		id: 415,
		name: "plan",
		pronounce: "plæn",
		explain: "to make detailed arrangements for something you want to do in the future",
		meaning: "(v): ‹vẽ/lập/đặt› kế hoạch, đồ án, sơ đồ; dự/dự định",
		example: {
			english: "Planning their wedding was a source of tension for the young couple",
			vietnamse: "Kế hoạch đám cưới của họ là một nguồn gốc căng thẳng của đôi tình nhân trẻ",
		},
		topic: "events",
	},
	{
		id: 416,
		name: "proximity",
		pronounce: "proximity",
		explain: "the state of being near someone or something in distance or time",
		meaning: "(n): gần (trạng thái gần, ở gần, thời gian gần, sự kiện gần...); sự gần gũi",
		example: {
			english: "The fans were worried by the proximity of the storm clouds",
			vietnamse: "Những người hâm mộ lo lắng bởi đám mây báo bão đến gần",
		},
		topic: "events",
	},
	{
		id: 417,
		name: "regulate",
		pronounce: "'regjuleit",
		explain: "to control something by means of rules",
		meaning: "(v): điều chỉnh, chỉnh đốn; quy định",
		example: {
			english: "The activities of credit companies are regulated by law.",
			vietnamse: "Các hoạt động của các công ty tín dụng được quy định của pháp luật.",
		},
		topic: "events",
	},
	{
		id: 418,
		name: "site",
		pronounce: "sait",
		explain: "a place where a building, town, etc. was, is, or will be located",
		meaning: "(n): nơi, chỗ, vị trí, địa điểm, khu đất",
		example: {
			english: "Once we saw the site, we knew it would be perfect for the event",
			vietnamse: "Khi mà chúng tôi thấy chỗ đó, chúng tôi đã biết nó lý tưởng cho sự kiện",
		},
		topic: "events",
	},
	{
		id: 419,
		name: "stage",
		pronounce: "steidʤ",
		explain: "a period or state that something or someone passes through while developing or making progress",
		meaning: "(n): trình diễn, dàn cảnh; sắp xếp, tổ chức",
		example: {
			english: "A historic house can be the perfect site to stage a small reception",
			vietnamse: "Một ngôi nhà lịch sử có thể là một nơi lý tưởng để tổ chức một cuộc chiêu đãi nhỏ",
		},
		topic: "events",
	},
	{
		id: 420,
		name: "agent",
		pronounce: "'eidʤənt",
		explain: "representative of a company",
		meaning: "(n): đại lý, đại diện (của một công ty)",
		example: {
			english: "A travel agent can usually find you the best deals on tickets and hotels",
			vietnamse: "Đại lý du lịch thường có thể tìm cho bạn những giao dịch tốt nhất vè vé và khách sạn.",
		},
		topic: "general travel",
	},
	{
		id: 421,
		name: "announcement",
		pronounce: "ə'naunsmənt",
		explain: "a spoken or written statement that informs people about something",
		meaning: "(n): ‹sự/lời› thông báo, công bố, tuyên bố; cáo thị, thông cáo",
		example: {
			english: "Did you hear an announcement about our new departure time?",
			vietnamse: "Anh đã nghe thông báo về giờ khởi hành mới của chúng ta chưa?",
		},
		topic: "general travel",
	},
	{
		id: 422,
		name: "beverage",
		pronounce: "'bəvəridʤ",
		explain: "any type of drink except water",
		meaning: "(n): đồ uống, thức uống (tất cả các loại, trừ nước lọc)",
		example: {
			english: "The flight attendant offered all passenders a cold beverage during the flight",
			vietnamse: "Tiếp viên hành không đã mời mọi hành khách một thức uống lạnh trong suốt chuyển bay.",
		},
		topic: "general travel",
	},
	{
		id: 423,
		name: "blanket",
		pronounce: "'blæɳkit",
		explain: "a large cover, often made of wool, used especially on beds to keep people warm",
		meaning: "(n, v): (n) mềm, chăn, lớp phủ; (v) phủ lên, che phủ",
		example: {
			english: "The snow blanketed the windshield making it difficult to see the roads",
			vietnamse: "Tuyết bao phủ kính chắn gió, khiến cho việc nhìn thấy đường sá rất khó",
		},
		topic: "general travel",
	},
	{
		id: 424,
		name: "board",
		pronounce: "bɔ:d",
		explain: "to get on a ship, train, plane, bus, etc",
		meaning: "(v): Lên tàu / máy bay / xe lửa",
		example: {
			english: "Passengers are waiting to board",
			vietnamse: "Các hành khách đang chờ để lên máy bay",
		},
		topic: "general travel",
	},
	{
		id: 425,
		name: "claim",
		pronounce: "kleim",
		explain: "to say that something is true",
		meaning: "(v): nhận lại, lấy lại; đòi hỏi, yêu cầu; tuyên bố, xác nhận; khai báo",
		example: {
			english: "Please proceed directly to the baggage arrival area to claim your luggage",
			vietnamse: "Vui lòng tiếp tục đi thẳng đến khu vực nhận hành lý để nhận lại hành lý của bạn.",
		},
		topic: "general travel",
	},
	{
		id: 426,
		name: "delay",
		pronounce: "di'lei",
		explain: "a period of time when someone or something has to wait because of a problem",
		meaning: "(v): chậm trễ, trì hoãn, hoãn lại",
		example: {
			english: "The bus was delayed due to inclement weather",
			vietnamse: "Xe bus bị chậm trễ tại vì thời tiết khắc nghiệt",
		},
		topic: "general travel",
	},
	{
		id: 427,
		name: "depart",
		pronounce: "di'pɑ:t",
		explain: "to leave a place, especially to start a trip",
		meaning: "(v): rời khỏi, khởi hành",
		example: {
			english: "Flights for Rome depart from Terminal 3.",
			vietnamse: "Chuyến bay khởi hành từ Rome cho Terminal 3",
		},
		topic: "general travel",
	},
	{
		id: 428,
		name: "embarkation",
		pronounce: "em'bɑ:'keiʃn",
		explain: "to get onto a ship",
		meaning: "(n): ‹sự/quá trình› lên tàu, cho lên tàu",
		example: {
			english: "The flight creaw must check the passengers's documents before embarkation",
			vietnamse: "Phi hành đoàn phải kiểm tra giấy tờ của hành khách trước khi cho lên máy bay.",
		},
		topic: "general travel",
	},
	{
		id: 429,
		name: "itinerary",
		pronounce: "ai'tinərəri",
		explain: "a plan of a trip, including the route and the places that you visit",
		meaning: "(n): lịch trình",
		example: {
			english: "I had to change my itinerary when I decided to add two more countries to my vacation",
			vietnamse: "Tôi đã phải đổi lộ trình khi tôi đã quyết định thêm vào 2 quốc gia nữa cho kỳ nghỉ của tôi.",
		},
		topic: "general travel",
	},
	{
		id: 430,
		name: "prohibit",
		pronounce: "prohibit",
		explain: "to stop something from being done or used, especially by law",
		meaning: "(v): ngăn cấm, ngăn chặn",
		example: {
			english: "The policy prohibits smoking on school grounds.",
			vietnamse: "Chính sách mới cấm hút thuốc trên sân trường.",
		},
		topic: "general travel",
	},
	{
		id: 431,
		name: "valid",
		pronounce: "'vælid",
		explain: "that is legally or officially acceptable",
		meaning: "(adj): có giá trị, có hiệu lực, hợp lệ (đặc biệt về mặt pháp lý)",
		example: {
			english: "I need to make certain that my passport is valid if we plan to go overseas this December",
			vietnamse: "Tôi cần biết chắc rằng hộ chiếu của tôi có giá trị nếu chúng tôi dự tính xuất ngoại tháng 12 này.",
		},
		topic: "general travel",
	},
	{
		id: 432,
		name: "deal with",
		pronounce: "NA",
		explain: "to attend to go, to manage",
		meaning: "(v): giải quyết, đối phó, xử lý; bàn về cái gì, thỏa thuận về cái gì",
		example: {
			english: "Ticket agents must deal courteously with irate customers",
			vietnamse: "Đại lý bán vé phải đối xử nhã nhặn với những khách hàng nổi giận",
		},
		topic: "airlines",
	},
	{
		id: 433,
		name: "destination",
		pronounce: ",desti'neiʃn",
		explain: "a place to which someone or something is going or being sent",
		meaning: "(n): nơi đến, nơi tới, đích đến, mục đích",
		example: {
			english: "The Great Barrier Reef is a popular tourist destination this year",
			vietnamse: "Dải đá ngầm Great Barrier là một điểm đến du lịch phổ biến trong năm nay",
		},
		topic: "airlines",
	},
	{
		id: 434,
		name: "distinguish",
		pronounce: "dis'tiɳgwiʃ",
		explain: "to recognize the difference between two people or things",
		meaning: "(v): phân biệt, nhận ra, nhận biết; phân thành, chia thành, xếp thành loại",
		example: {
			english: "Suki was able to distinguish between the different types of jets on the runway",
			vietnamse: "Suki có thể phân biệt được các kiểu máy bay phản lực khác nhau ở trên đường băng",
		},
		topic: "airlines",
	},
	{
		id: 435,
		name: "economize",
		pronounce: "i:'kɔnəmaiz",
		explain: "to use less money, time, etc. than you normally use",
		meaning: "(v): tiết kiệm",
		example: {
			english: "My travel agent knows I like to economize and always looks out for the best prices for me",
			vietnamse: "Người đại lý du lịch của tôi biết tôi thích tiết kiệm và luôn tìm cho tôi giá tốt nhất",
		},
		topic: "airlines",
	},
	{
		id: 436,
		name: "equivalent",
		pronounce: "i'kwivələnt",
		explain: "equal in value, amount, meaning, importance, etc.",
		meaning: "(adj): tương đương",
		example: {
			english: "The food the airline serves in coach class is equivalent to that served in first class",
			vietnamse: "Đồ ăn mà hãng hàng không phục vụ cho vé hạng thường thì tương đương với đồ ăn được phục vụ cho vé hạng nhất",
		},
		topic: "airlines",
	},
	{
		id: 437,
		name: "excursion",
		pronounce: "iks'kə:ʃn",
		explain: "a short trip made for pleasur",
		meaning: "(n): chuyến thăm quan, cuộc đi tham quan, cuộc đi chơi",
		example: {
			english: "There are regular weekend excursions throughout the summer.",
			vietnamse: "Có chuyến du ngoạn cuối tuần thường xuyên trong suốt mùa hè.",
		},
		topic: "airlines",
	},
	{
		id: 438,
		name: "expense",
		pronounce: "iks'pens",
		explain: "the money that you spend on something",
		meaning: "(v): Phí tốn, chi phí",
		example: {
			english: "A luxury vacation involves many expenses",
			vietnamse: "Một kỳ nghỉ xa hoa đòi hỏi nhiều chi phí.",
		},
		topic: "airlines",
	},
	{
		id: 439,
		name: "extend",
		pronounce: "iks'tend",
		explain: "to make something longer or larger",
		meaning: "(v): Kéo dài ( thời hạn....); gia hạn, mở rộng",
		example: {
			english: "There are plans to extend the subway line in this city",
			vietnamse: "Có kế hoạch để mở rộng đường tàu điện ngầm trong thành phố này",
		},
		topic: "airlines",
	},
	{
		id: 440,
		name: "prospective",
		pronounce: "prospective",
		explain: "expected to do something or to become something",
		meaning: "(adj): (thuộc) tương lai, triển vọng; về sau, sắp tới",
		example: {
			english: "I narrowed my list of prospective destinations to my three top choices",
			vietnamse: "Tôi rút gọn danh sách các điểm đến triển vọng đối với tôi xuống còn 3 chọn lựa",
		},
		topic: "airlines",
	},
	{
		id: 441,
		name: "situation",
		pronounce: ",sitju'eiʃn",
		explain: "all the circumstances and things that are happening at a particular time and in a particular place",
		meaning: "(n): vị trí, địa thế; tình huống, hoàn cảnh; việc làm, chỗ làm",
		example: {
			english: "The airline suggested I check with the State Department regarding the political situation in the country I'm flying to",
			vietnamse: "Hãng hàng không đã đề nghị tôi kiểm tra với Bộ Ngoại giao Mỹ về tình hình chính trị ở quốc gia mà tôi đang bay đến",
		},
		topic: "airlines",
	},
	{
		id: 442,
		name: "substantially",
		pronounce: "səb'stænʃəli",
		explain: "very much; a lot",
		meaning: "(adv): về thực chất, về bản chất, về cơ bản; lớn lao, đáng kể",
		example: {
			english: "The airline I work for had a substantially higher rating for customer satisfaction than our competitors had",
			vietnamse: "Hãng hàng không mà tôi đang làm việc có thứ hạng về sự hài lòng của khách hàng cao hơn đáng kể thứ hạng mà các đối thủ có",
		},
		topic: "airlines",
	},
	{
		id: 443,
		name: "system",
		pronounce: "'sistim",
		explain: "an organized set of ideas or theories",
		meaning: "(n): hệ thống, hệ thống phân loại, chế độ (hoạt động, xã hội...)",
		example: {
			english: "The airline system covers the entire world with flights",
			vietnamse: "Hệ thống hàng không trải ra/bao trùm toàn bộ thế giới bằng các chuyến bay",
		},
		topic: "airlines",
	},
	{
		id: 444,
		name: "comprehensive",
		pronounce: ",kɔmpri'hensiv",
		explain: "including all, or almost all, the items, details, facts, information, etc., that may be concerned",
		meaning: "(adj): bao hàm, toàn diện; mau hiểu, lĩnh hội nhanh",
		example: {
			english: "Our travel agent gave us a comprehensive travel package, including rail passes",
			vietnamse: "Người đại lý du lịch của chúng tôi trao cho một gói du lịch toàn diện, kể cả đi tàu lửa",
		},
		topic: "trains",
	},
	{
		id: 445,
		name: "deluxe",
		pronounce: "dɪˈlʌks",
		explain: "luxurious",
		meaning: "(adj): xa xỉ, xa hoa; thuộc loại sang trọng/thượng hạng",
		example: {
			english: "My parents decided to splurge on deluxe accommodations for their trip",
			vietnamse: "Cha mẹ tôi đã quyết định tiêu tiền thoải mái vào tiện nghi xa hoa cho chuyến đi của họ",
		},
		topic: "trains",
	},
	{
		id: 446,
		name: "directory",
		pronounce: "di'rektəri",
		explain: "a book containing lists of information, usually in alphabetical order",
		meaning: "(n): danh bạ, danh bạ điện thoại; sách chỉ dẫn/hướng dẫn",
		example: {
			english: "We consulted the directory to see where the train station was located",
			vietnamse: "Chúng tôi đã tham khảo danh bạ điện thoại để xem ga xe lửa nằm ở chỗ nào",
		},
		topic: "trains",
	},
	{
		id: 447,
		name: "duration",
		pronounce: "djuə'reiʃn",
		explain: "the length of time that something lasts or continues",
		meaning: "(n): khoảng thời gian (tồn tại một sự việc)",
		example: {
			english: "Mother lent me her spare jacket for the duration of the trip",
			vietnamse: "Mẹ đã cho tôi mượn chiếc áo khoác để dành của bà cho suốt thời gian chuyến đi (của tôi)",
		},
		topic: "trains",
	},
	{
		id: 448,
		name: "entitle",
		pronounce: "ɪnˈtaɪtl",
		explain: "to give someone the right to have or to do something",
		meaning: "(v): cho phép làm cái gì, cho phép có cái gì",
		example: {
			english: "During the holiday rush, a train ticket entitled the passenger to a ride, but not necessarily a seat",
			vietnamse: "Trong suốt mùa cao điểm nghỉ lễ, vé xe lửa cho phép hành khách lên tàu tàu, nhưng không nhất thiết có một chỗ ngồi",
		},
		topic: "trains",
	},
	{
		id: 449,
		name: "fare",
		pronounce: "feə",
		explain: "the money that you pay to travel by bus, plane, taxi, etc.",
		meaning: "(n): cước phí, tiền (vé) tàu xe",
		example: {
			english: "Pay your fare at the ticket office and you will get a ticket to board the train",
			vietnamse: "Thanh toán cước phí của anh tại phòng vé và anh sẽ nhận được một vé lên tàu",
		},
		topic: "trains",
	},
	{
		id: 450,
		name: "offset",
		pronounce: "'ɔ:fset",
		explain: "to use one cost, payment, or situation in order to cancel or reduce the effect of another",
		meaning: "(v): bù lại, bù đắp, đền bù; in ốp-sét;",
		example: {
			english: "The high cost of the hotel room offset the savings we made by taking the train instead of the plane",
			vietnamse: "Chi phí cao của khách sạn bù lại khoản tiết kiệm mà chúng tôi đã có bằng cách đi xe lửa thay vì máy bay",
		},
		topic: "trains",
	},
	{
		id: 451,
		name: "operate",
		pronounce: "'ɔpəreit",
		explain: "to work in a particular way",
		meaning: "(v): hoạt động, chạy (máy); thao tác, thực hiện, tiến hành, triển khai...",
		example: {
			english: "The train only operates in this area at the height of the tourist season",
			vietnamse: "Xe lửa chỉ chạy trong khu vực này vào lúc cao điểm của mùa du lịch",
		},
		topic: "trains",
	},
	{
		id: 452,
		name: "punctually",
		pronounce: "'pʌɳktjuəli",
		explain: "happening at the arranged or correct time",
		meaning: "(adv): đúng giờ, không chậm trễ",
		example: {
			english: "Please be on time; the train leaves punctually at noon",
			vietnamse: "Hãy đến kịp giờ; xe lửa rời ga đúng giờ vào buổi trưa",
		},
		topic: "trains",
	},
	{
		id: 453,
		name: "relatively",
		pronounce: "'relətivli",
		explain: "to a fairly large degree",
		meaning: "(adv): tương đối, vừa phải, hơi; có quan hệ với, có liên quan",
		example: {
			english: "The train is relatively empty for this time of day",
			vietnamse: "Đoàn tàu hơi vắng khách vào lúc này trong ngày",
		},
		topic: "trains",
	},
	{
		id: 454,
		name: "remainder",
		pronounce: "ri'meində",
		explain: "the remaining people, things, or time",
		meaning: "(n): phần còn lại, chỗ còn lại; số dư, phần dư",
		example: {
			english: "The Alaskan frontier has train service in the summer, but for the remainder of the year the tracks are impassable",
			vietnamse: "Biên giới ở Alaska có dịch vụ xe lửa vào mùa hè, nhưng vào lúc còn lại của năm thì đường ray không thể đi qua được (do bị đóng băng)",
		},
		topic: "trains",
	},
	{
		id: 455,
		name: "remote",
		pronounce: "ri'mout",
		explain: "far away from places where other people live",
		meaning: "(adj): xa, xa xôi, xa xăm; xa cách, hẻo lánh, cách biệt",
		example: {
			english: "We took the train out of the city and found a remote hotel in the country for the weekend",
			vietnamse: "Chúng tôi đón xe lửa ra khỏi thành phố và tìm một khách sạn cách biệt ở miền quê vào dịp cuối tuần",
		},
		topic: "trains",
	},
	{
		id: 456,
		name: "advanced",
		pronounce: "əd'vɑ:nst",
		explain: "having the most modern and recently developed ideas, methods, etc.",
		meaning: "(adj): tiên tiến, tiến bộ, cấp trên; cấp cao, ở mức cao",
		example: {
			english: "Since the hotel installed an advanced computer system, all operations have been functioning more smoothly",
			vietnamse: "Bởi vì khách sạn đã lắp đặt một hệ thống máy tính tiên tiến, mọi hoạt động đang được vận hành trơn tru.",
		},
		topic: "hotels",
	},
	{
		id: 457,
		name: "chain",
		pronounce: "tʃein",
		explain: "a group of stores or hotels owned by the same company",
		meaning: "(n): chuỗi (khách sạn); nhà hàng....)",
		example: {
			english: "Budget-priced hotel chains have made a huge impact in the industry",
			vietnamse: "Chuỗi khách sạn giá rẻ đã tạo ra một tác động to lớn cho nền công nghiệp.",
		},
		topic: "hotels",
	},
	{
		id: 458,
		name: "check in",
		pronounce: "NA",
		explain: "to register at a hotel",
		meaning: "(v): làm thủ tục đăng ký (để vào khách sạn, vào hội nghị, lên máy bay…)",
		example: {
			english: "Do you know your check-in time ?",
			vietnamse: "Bạn có biết thời gian check-in không?",
		},
		topic: "hotels",
	},
	{
		id: 459,
		name: "confirm",
		pronounce: "kən'fə:m",
		explain: "to state or show that something is definitely true or correct,",
		meaning: "(v): xác nhận, chứng thực",
		example: {
			english: "Please write to confirm your reservation",
			vietnamse: "Xin vui lòng viết xác nhận cho việc đặt phòng của bạn.",
		},
		topic: "hotels",
	},
	{
		id: 460,
		name: "expect",
		pronounce: "iks'pekt",
		explain: "to think or believe that something will happen",
		meaning: "(v): mong chờ, mong đợi, hy vọng; đòi hỏi; cho rằng, nghĩ rằng; đoán trước, liệu trước",
		example: {
			english: "You can expect a clean room when you check in at a hotel",
			vietnamse: "Anh có thể đòi hỏi một căn phòng sạch sẽ khi anh làm thủ tục check-in tại khách sạn.",
		},
		topic: "hotels",
	},
	{
		id: 461,
		name: "housekeeper",
		pronounce: "'haus,ki:pə",
		explain: "a person, usually a woman, whose job is to manage the shopping, cooking, cleaning, etc. in a house or an institution",
		meaning: "(n): quản gia; người coi nhà, người giữ nhà",
		example: {
			english: "Eloise's first job at the hotel was as a housekeeper and now she is the manager",
			vietnamse: "Công việc đầu tiên của Eloise ở khách sạn là người trực buồng và bây giờ cô đã là người quản lý.",
		},
		topic: "hotels",
	},
	{
		id: 462,
		name: "notify",
		pronounce: "'noutifai",
		explain: "to formally or officially tell someone about something",
		meaning: "(v): báo, thông báo, khai báo",
		example: {
			english: "They notified the hotel that they had been delayed in traffic and would be arriving late.",
			vietnamse: "Họ đã thông báo với khách sạn rằng họ đã bị chậm trễ trong giao thông và sẽ đến muộn.",
		},
		topic: "hotels",
	},
	{
		id: 463,
		name: "preclude",
		pronounce: "pri'klu:d",
		explain: "to prevent something from happening or someone from doing something; to make something impossible",
		meaning: "(v): loại trừ, trừ bỏ, ngăn ngừa; đẩy ra",
		example: {
			english: "The horrible rainstorm precluded us from traveling any further.",
			vietnamse: "Cơn mưa giông kinh khủng đã ngăn chúng tôi du hành thêm nữa.",
		},
		topic: "hotels",
	},
	{
		id: 464,
		name: "quote",
		pronounce: "kwout",
		explain: "to repeat the exact words that another person has said or written",
		meaning: "(v): (n) sự trích dẫn, lời trích dẫn, đoạn trích dẫn, định giá; (v) trích dẫn",
		example: {
			english: "We were quoted a price of $89 for the room for one night",
			vietnamse: "Chúng tôi đã định giá 89 đô la cho một phòng trong một đêm.",
		},
		topic: "hotels",
	},
	{
		id: 465,
		name: "rate",
		pronounce: "reit",
		explain: "a measurement of the speed at which something happens",
		meaning: "(n): mức, giá (giá được tính theo các nấc căn cứ theo chất lượng)",
		example: {
			english: "The sign in the lobby lists the seasonal rates",
			vietnamse: "Biển hiệu ở trong hành lang liệt kê các mức giá theo từng mùa.",
		},
		topic: "hotels",
	},
	{
		id: 466,
		name: "reservation",
		pronounce: ",rezə'veiʃn",
		explain: "an arrangement for a seat on a plane or train, a room in a hotel, etc. to be kept for you",
		meaning: "(n): sự dành trước, sự đặt chổ trước",
		example: {
			english: "I know I made a reservation for tonight, but the hotel staff has no record of it in the system",
			vietnamse: "Tôi biết rằng tôi đã đặt chổ tối nay, nhưng nhân viên khách sạn không lưu nó vào hệ thống.",
		},
		topic: "hotels",
	},
	{
		id: 467,
		name: "service",
		pronounce: "'sə:vis",
		explain: "useful function",
		meaning: "(n): dịch vụ, sự phục vụ",
		example: {
			english: "The food was good but the service was very slow.",
			vietnamse: "Thức ăn thì rất ngon nhưng dịch vụ thì quá tồi.",
		},
		topic: "hotels",
	},
	{
		id: 468,
		name: "busy",
		pronounce: "'bizi",
		explain: "having a lot to do",
		meaning: "(adj): bận, bận rộn",
		example: {
			english: "Alfred was busy getting ready for his vacation",
			vietnamse: "Alfred bận rộn để chuẩn bị sẵn sàng cho kỳ nghỉ của mình",
		},
		topic: "car rentals",
	},
	{
		id: 469,
		name: "coincide",
		pronounce: ",kouin'said",
		explain: "to take place at the same time",
		meaning: "(v): trùng khớp, trùng hợp, trùng nhau; xảy ra đồng thời",
		example: {
			english: "My cousin's wedding coincided with a holiday weekend, so it was a perfect time to rent a car and go for a drive",
			vietnamse: "Đám cưới của người anh/em bà con của tôi trùng với kỳ nghỉ lễ cuối tuần, vậy nó là một dịp lý tưởng để thuê ô-tô và đi chơi bằng xe",
		},
		topic: "car rentals",
	},
	{
		id: 470,
		name: "confusion",
		pronounce: "kən'fju:ʤn",
		explain: "a state of not being certain about what is happening",
		meaning: "(n): ‹sự› lộn xộn, hỗn loạn; ‹sự› mơ hồ, mập mờ; bối rối",
		example: {
			english: "To avoid any confusion about renting the car, Yolanda asked her travel agent to make the arrangements on her behalf",
			vietnamse: "Để tránh bất kỳ nhầm lẫn nào trong việc thuê xe, Yolanda đã yêu cầu người đại lý du lịch thực hiện dàn xếp thay mặt cho cô ấy.",
		},
		topic: "car rentals",
	},
	{
		id: 471,
		name: "contact",
		pronounce: "kɔntækt",
		explain: "to get in touch with",
		meaning: "(v): ‹sự/chỗ› chạm, tiếp xúc, giao tiếp, giao dịch, gặp gỡ;",
		example: {
			english: "Manuel contacted at least a dozen car rental agencies to get the best deal",
			vietnamse: "Manuel đã tiếp xúc với ít nhất một tá đại lý đại lý cho thuê xe để được giao dịch tốt nhất",
		},
		topic: "car rentals",
	},
	{
		id: 472,
		name: "disappoint",
		pronounce: ",disə'pɔint",
		explain: "to make someone feel sad because something that they hope for or expect to happen does not happen",
		meaning: "(v): thất vọng, chán ngán; nhụt chí, nản lòng; thất hứa, thất ước",
		example: {
			english: "Leila was disappointed to discover that no rental cars were available the weekend she wished to travel",
			vietnamse: "Leila thất vọng khi phát hiện ra rằng không có xe thuê vào dịp cuối tuần mà cô muốn đi du lịch",
		},
		topic: "car rentals",
	},
	{
		id: 473,
		name: "intend",
		pronounce: "in'tend",
		explain: "to have a plan, result, or purpose in your mind",
		meaning: "(v): định, dự định, có ý định",
		example: {
			english: "Do you intend to return the car to this location or to another location?",
			vietnamse: "Anh định quay xe về chỗ này hay là chạy đến chỗ khác?",
		},
		topic: "car rentals",
	},
	{
		id: 474,
		name: "license" ,
		pronounce: "'laisəns",
		explain: "to give somebody official permission to do, own, or use something",
		meaning: "(n): giấy chứng nhận; bản quyền",
		example: {
			english: "A driver's license allows you to operate a motor vehicle legally",
			vietnamse: "Giấy phép lái xe hạng A cho phép bạn lái xe mô tô một cách hợp pháp",
		},
		topic: "car rentals",
	},
	{
		id: 475,
		name: "nervously",
		pronounce: "ˈnɜːvəsl",
		explain: "anxious about something or afraid of something",
		meaning: "(adv): lo lắng, bồn chồn, căng thẳng",
		example: {
			english: "As we approached the city Lonnie started driving nervously, so I volunteered to drive that part of the trip",
			vietnamse: "Lúc mà chúng tôi đến thành phố thì Lonnie bắt đầu lái xe rất căng thẳng, vì vậy tôi tình nguyện lái đoạn đường đó của cuộc hành trình",
		},
		topic: "car rentals",
	},
	{
		id: 476,
		name: "optional",
		pronounce: "'ɔpʃənl",
		explain: "that you can choose to do or have if you want to",
		meaning: "(adj): tùy ý, tùy chọn, không bắt buộc",
		example: {
			english: "Check this box if you wish to have this optional insurance",
			vietnamse: "Hãy đánh dấu vào khung này này nếu anh muốn có tùy chọn bảo hiểm",
		},
		topic: "car rentals",
	},
	{
		id: 477,
		name: "tempt",
		pronounce: "tempt",
		explain: "to attract someone or make someone want to do or have something",
		meaning: "(v): cám dỗ, khêu gợi; xúi, xúi giục",
		example: {
			english: "I am tempted by the idea of driving across the country instead of flying",
			vietnamse: "Tôi bị cám dỗ bởi ý tưởng lái xe xuyên qua đất nước thay vì đi máy bay",
		},
		topic: "car rentals",
	},
	{
		id: 478,
		name: "thrill",
		pronounce: "θril",
		explain: "a strong feeling of excitement or pleasure;",
		meaning: "(n): run lên, rùng mình, rùng rợn, ly kỳ; rộn lên, rộn ràng; rung cảm, xúc động",
		example: {
			english: "Just taking a vacation is thrill enough, even if we are driving instead of flying",
			vietnamse: "Hãy thực hiện một kỳ nghỉ có đủ sự rộn ràng lên, cho dù ta đang lái xe thay vì đi máy bay",
		},
		topic: "car rentals",
	},
	{
		id: 479,
		name: "tier",
		pronounce: "'taiə",
		explain: "one of several levels in an organization or a system",
		meaning: "(n): ‹người› buộc, cột, trói; tầng, lớp, tầng lớp",
		example: {
			english: "If you are on a budget, I suggest you think about renting a car from our lowest tier",
			vietnamse: "Nếu anh chỉ có một số tiền nhỏ, tôi đề nghị anh hãy suy nghĩ về việc thuê một chiếc xe thuộc hạng thấp nhất của chúng tôi",
		},
		topic: "car rentals",
	},
	{
		id: 480,
		name: "attainment",
		pronounce: "ə'teinmənt",
		explain: "something that you achieved",
		meaning: "(n): đạt được, giành được",
		example: {
			english: "The attainment of his ambitions was still a dream.",
			vietnamse: "Việc đạt được những tham vọng của ông vẫn còn là một giấc mơ.",
		},
		topic: "movies",
	},
	{
		id: 481,
		name: "combine",
		pronounce: "'kɔmbain",
		explain: "to come together to form a single thing or group",
		meaning: "(v): kết hợp, phối hợp",
		example: {
			english: "The director combined two previously separate visual techniques",
			vietnamse: "Đạo diễn đã kết hợp 2 kỹ xảo hình ảnh riêng biệt trước đây lại với nhau",
		},
		topic: "movies",
	},
	{
		id: 482,
		name: "continue",
		pronounce: "kən'tinju:",
		explain: "happening without stopping",
		meaning: "(v): tiếp tục, tiếp diễn, làm tiếp, duy trì",
		example: {
			english: "The film continues the story set out in an earlier film",
			vietnamse: "Bộ phim tiếp nối câu chuyện được bắt đầu trong một bộ phim trước đây",
		},
		topic: "movies",
	},
	{
		id: 483,
		name: "description",
		pronounce: "dis'kripʃn",
		explain: "a piece of writing or speech that says what someone or something is like; the act of writing or saying in words what someone or something is like",
		meaning: "(n): ‹sự› diễn tả, mô tả; diện mạo, hình dạng",
		example: {
			english: "The description of the film did not match what we saw on screen",
			vietnamse: "Sự mô tả về bộ phim đã không xứng với những gì chúng ta thấy trên màn ảnh",
		},
		topic: "movies",
	},
	{
		id: 484,
		name: "disperse",
		pronounce: "dis'pə:s",
		explain: "to move apart and go away in different directions",
		meaning: "(v): giải tán, phân tán",
		example: {
			english: "Police dispersed the protesters with tear gas.",
			vietnamse: "Cảnh sát giải tán người biểu tình bằng hơi cay.",
		},
		topic: "movies",
	},
	{
		id: 485,
		name: "entertainment",
		pronounce: ",entə'teinmənt",
		explain: "movies, music, etc. used to entertain people",
		meaning: "(n): ‹sự› giải trí, tiêu khiển",
		example: {
			english: "There was not entertainment for children of guests at the hotel",
			vietnamse: "Không có trò giải trí nào cho những vị khách trẻ em ở khách sạn",
		},
		topic: "movies",
	},
	{
		id: 486,
		name: "influence",
		pronounce: "'influəns",
		explain: "the effect that someone or something has on the way a person thinks",
		meaning: "(n): ảnh hưởng đến, tác động đến; khiến cho",
		example: {
			english: "The producer was able to influence the town council to allow her to film in the park",
			vietnamse: "Nhà sản xuất có thể tác động hội đồng thành phố cho phép bà được quay phim trong công viên",
		},
		topic: "movies",
	},
	{
		id: 487,
		name: "range",
		pronounce: "reɪndʒ",
		explain: "a variety of things of a particular type",
		meaning: "(n): vùng, phạm vi, lĩnh vực",
		example: {
			english: "The range of the director's vision is impressive",
			vietnamse: "Tầm nhìn của đạo diện là đầy ấn tượng",
		},
		topic: "movies",
	},
	{
		id: 488,
		name: "release",
		pronounce: "ri'li:s",
		explain: "to let someone or something come out of a place where they have been kept",
		meaning: "(v): công bố, phát hành",
		example: {
			english: "The film was finally released to movie theaters after many delays",
			vietnamse: "Bộ phim cuối cùng đã được phát hành cho các rạp chiếu phim sau nhiều trì hoãn",
		},
		topic: "movies",
	},
	{
		id: 489,
		name: "representation",
		pronounce: ",reprizen'teiʃn",
		explain: "the act of presenting someone or something in a particular way",
		meaning: "(n): đại diện, thay mặt; tiêu biểu,tượng trưng; diễn tả, đóng vai",
		example: {
			english: "The film's representation of world poverty through the character of the hungry child was quite moving",
			vietnamse: "Sự diễn tả của bộ phim về thế giới bần cùng thông qua nhân vật đứa trẻ đói khát thì khá là thương tâm.",
		},
		topic: "movies",
	},
	{
		id: 490,
		name: "separately",
		pronounce: "ˈsɛprətli",
		explain: "as a separate person or thing; not together",
		meaning: "(adv): tách rời, riêng rẽ",
		example: {
			english: "The theater was very crowded so we had to sit separately",
			vietnamse: "Rạp hát rất đông nên chúng tôi phải ngồi riêng rẽ",
		},
		topic: "movies",
	},
	{
		id: 491,
		name: "successive",
		pronounce: "sək'sesiv",
		explain: "following immediately one after the other",
		meaning: "(adj): kế tiếp, liên tiếp, liên tục; lần lượt",
		example: {
			english: "This was their fourth successive win.",
			vietnamse: "Đây là chiến thắng thứ tư liên tiếp của họ.",
		},
		topic: "movies",
	},
	{
		id: 492,
		name: "action",
		pronounce: "'ækʃn",
		explain: "the events in a story, play, etc.",
		meaning: "(n): Diễn biến (của vở kịch)",
		example: {
			english: "She started her acting career while still at school.",
			vietnamse: "Cô bắt đầu sự nghiệp diễn xuất của cô trong khi vẫn còn ở trường.",
		},
		topic: "theater",
	},
	{
		id: 493,
		name: "approach",
		pronounce: "ə'proutʃ",
		explain: "to come near to someone or something in distance or time",
		meaning: "(v): tiến gần, tiếp cận; đường tiến vào, lối vào; thăm dò, tiếp xúc",
		example: {
			english: "The performance approaches perfection",
			vietnamse: "Việc diễn kịch gần như là hoàn hảo",
		},
		topic: "theater",
	},
	{
		id: 494,
		name: "audience",
		pronounce: "'ɔ:djəns",
		explain: "people who have gathered to watch or listen to something (a play, concert, someone speaking, etc.)",
		meaning: "(n): khán giả, thính giả, độc giả",
		example: {
			english: "The audience cheered the actors as they walked off the stage",
			vietnamse: "Khán giả đã hoan hô các diễn viên khi họ rời khỏi sân khấu",
		},
		topic: "theater",
	},
	{
		id: 495,
		name: "creative",
		pronounce: "'eitiv",
		explain: "involving the use of skill and the imagination to produce something new or a work of art",
		meaning: "(adj): sáng tạo",
		example: {
			english: "The writer's creative representation of the Seven Deadly Sins was astounding",
			vietnamse: "Sự diễn tả sáng tạo vở kịch \"7 trọng tội\" của nhà văn đã làm kinh ngạc",
		},
		topic: "theater",
	},
	{
		id: 496,
		name: "dialogue",
		pronounce: "'daiəlɔg",
		explain: "conversations in a book, play, or movie",
		meaning: "(n): cuộc đối thoại, giai thoại",
		example: {
			english: "The actors performed the dialogue without using scripts",
			vietnamse: "Các diễn viên trình diễn cuộc đối thoại mà không dùng kịch bản",
		},
		topic: "theater",
	},
	{
		id: 497,
		name: "element",
		pronounce: "'elimənt",
		explain: "a necessary or typical part of something",
		meaning: "(n): yếu tố, nguyên tố",
		example: {
			english: "The audience is an essential element of live theater",
			vietnamse: "Khán giả là một yếu tố thiết yếu của nhà hát sống (nhà hát trực tiếp)",
		},
		topic: "theater",
	},
	{
		id: 498,
		name: "experience",
		pronounce: "iks'piəriəns",
		explain: "the knowledge and skill that you have gained through doing something for a period of time",
		meaning: "(n): kinh nghiệm, từng trải",
		example: {
			english: "The experience of live theater is very thrilling",
			vietnamse: "Sự từng trải của nhà hát sống là rất ly kỳ",
		},
		topic: "theater",
	},
	{
		id: 499,
		name: "occur",
		pronounce: "ə'kə:",
		explain: "to happen",
		meaning: "(v): xuất hiện; xảy ra, xảy đến",
		example: {
			english: "The murder in the play occurs in the second act",
			vietnamse: "Vụ án mạng trong vở kịch xuất hiện ở hồi thứ 2",
		},
		topic: "theater",
	},
	{
		id: 500,
		name: "perform",
		pronounce: "pə'fɔ:m",
		explain: "to do something, such as a piece of work, task, or duty",
		meaning: "(v): thực hiện, thi hành; trình bày, biểu diễn, đóng vai",
		example: {
			english: "The theater group performed a three-act play",
			vietnamse: "Nhóm diễn kịch đang trình diễn một vở kịch có 3 hồi",
		},
		topic: "theater",
	},
	{
		id: 501,
		name: "rehearse",
		pronounce: "ri'hə:s",
		explain: "to practice or make people practice a play, piece of music, etc. in preparation for a public performance",
		meaning: "(v): diễn tập; nhắc lại, kể lại",
		example: {
			english: "Today, we'll just be rehearsing the final scene.",
			vietnamse: "Hôm nay, chúng tôi sẽ chỉ được tập luyện cảnh cuối cùng.",
		},
		topic: "theater",
	},
	{
		id: 502,
		name: "review",
		pronounce: "ri'vju:",
		explain: "an examination of something, with the intention of changing it if necessary",
		meaning: "(n, v): sự phê bình, lời phê bình",
		example: {
			english: "The terms of the contract are under review.",
			vietnamse: "Các điều khoản của hợp đồng đang được xem xét.",
		},
		topic: "theater",
	},
	{
		id: 503,
		name: "sell out",
		pronounce: "'selaut",
		explain: "to sell all the tickets",
		meaning: "(v): hết vé",
		example: {
			english: "The tickets sold out within hours.",
			vietnamse: "Các vé đã được bán hết trong vài giờ",
		},
		topic: "theater",
	},
	{
		id: 504,
		name: "available",
		pronounce: "ə'veiləbl",
		explain: "that you can get, buy, or find",
		meaning: "(adj): sẵn có, sẵn sàng (để dùng, để phục vụ)",
		example: {
			english: "I checked the list of available compact discs before ordering",
			vietnamse: "Tôi đã kiểm tra danh sách các đĩa CD có sẵn trước khi đặt mua",
		},
		topic: "music",
	},
	{
		id: 505,
		name: "broaden",
		pronounce: "'brɔ:dn",
		explain: "NA",
		meaning: "(to become wider): mở rộng, nới rộng",
		example: {
			english: "You will appreciate music more if you broaden your tastes and listen to several types of music",
			vietnamse: "Bạn sẽ biết thưởng thức âm nhạc hơn nếu bạn mở rộng thị hiếu của mình và lắng nghe vài loại âm nhạc",
		},
		topic: "music",
	},
	{
		id: 506,
		name: "category",
		pronounce: "'kætigəri",
		explain: "group of people or things with particular features in common",
		meaning: "(n): loại, hạng",
		example: {
			english: "Jazz is one of many categories of music",
			vietnamse: "Jazz là một trong nhiều thể loại âm nhạc",
		},
		topic: "music",
	},
	{
		id: 507,
		name: "disparate",
		pronounce: "'dispərit",
		explain: "made up of parts or people that are very different from each other",
		meaning: "(adj): khác biệt, khác loại, khác hẳn nhau",
		example: {
			english: "Religious song cut across disparate categories of music",
			vietnamse: "Bài hát tôn giáo (thánh ca) tách hẳn ra làm thể loại âm nhạc khác biệt",
		},
		topic: "music",
	},
	{
		id: 508,
		name: "divide",
		pronounce: "di'vaid",
		explain: "to separate or make something separate into parts",
		meaning: "(v): chia ra, phân chia; chia rẽ, ly gián",
		example: {
			english: "The music class was evenly divided between those who liked country and western music and those who do not",
			vietnamse: "Các thể loại âm nhạc đã chia đều ra những người thích nhạc đồng quê và miền tây với những người không thích",
		},
		topic: "music",
	},
	{
		id: 509,
		name: "favor",
		pronounce: "'feivə",
		explain: "to prefer one plan, way of doing something, ect to another",
		meaning: "(v): chiếu cố, thiên vị; thích, thiện cảm",
		example: {
			english: "Sam enjoys the works of several composers but he tends to favor Mozart",
			vietnamse: "Sam thưởng thức các tác phẩm của vài nhà soạn nhạc nhưng anh có khuynh hướng thiên về Mozart hơn",
		},
		topic: "music",
	},
	{
		id: 510,
		name: "instinct",
		pronounce: "in'stiɳkt",
		explain: "a natural tendency for people and animals to behave in a particular way, using the knowledge and abilities that they were born",
		meaning: "(n): bản năng; năng khiếu, thiên hướng",
		example: {
			english: "The student's ability to play the cello was so natural, it seemed an instinct",
			vietnamse: "Khả năng chơi đàn cello của người sinh viên quả là trời cho, nó dường như là 1 bản năng",
		},
		topic: "music",
	},
	{
		id: 511,
		name: "prefer",
		pronounce: "pri'fə:",
		explain: "to like one thing or person better than another",
		meaning: "(v): thích hơn, ưa hơn; đề bạt, thăng cấp; đưa ra, trình ra",
		example: {
			english: "Ms. Lanet prefers to get a seat near the aisle when she attends a concert",
			vietnamse: "Cô Lanet thích chọn một ghế gần lối đi mỗi khi cô tham dự một buổi hòa nhạc",
		},
		topic: "music",
	},
	{
		id: 512,
		name: "reason",
		pronounce: "'ri:zn",
		explain: "a cause or an explanation for something that has happened",
		meaning: "(n): lý do, lý lẽ; lý trí, lẽ phải",
		example: {
			english: "There is every reason to believe that Beethoven will still be popular in the next century",
			vietnamse: "Có nhiều lý do để tin rằng (nhạc) Beethoven vẫn còn nổi tiếng trong thế kỷ tiếp theo",
		},
		topic: "music",
	},
	{
		id: 513,
		name: "relaxation",
		pronounce: ",ri:læk'seiʃn",
		explain: "ways of resting and enjoying yourself",
		meaning: "(n): ‹sự› thư giãn, giải trí; nghỉ ngơi, nới lỏng, làm dịu, làm giảm",
		example: {
			english: "He played the piano for relaxation and pleasure",
			vietnamse: "Anh ta đã chơi đàn piano để thư giãn và vui thú",
		},
		topic: "music",
	},
	{
		id: 514,
		name: "taste",
		pronounce: "teist",
		explain: "a person's ability to choose things that people recognize as being of good quality or appropriate",
		meaning: "(n): vị giác; ‹sự› nếm, thưởng thức; sở thích, thị hiếu",
		example: {
			english: "He has very good taste in music.",
			vietnamse: "Anh ấy rất biết thưởng thức âm nhạc.",
		},
		topic: "music",
	},
	{
		id: 515,
		name: "urge",
		pronounce: "ɜːdʒ",
		explain: "to advise or try hard to persuade someone to do something",
		meaning: "(v): thúc giục, thúc đẩy, thôi thúc; cố nài, cố thuyết phục",
		example: {
			english: "His mother urged him to study the piano",
			vietnamse: "Mẹ anh ta đã thúc giục anh ta học đàn piano.",
		},
		topic: "music",
	},
	{
		id: 516,
		name: "acquire",
		pronounce: "ə'kwaiə",
		explain: "to gain something by your own efforts",
		meaning: "(v): đạt được, thu được, giành được, kiếm được (obtain)",
		example: {
			english: "The museum acquired a Van Gogh during heavy bidding",
			vietnamse: "Viện bảo tàng đã giành được một bức tranh của Van Gogh trải qua cuộc đấu giá mạnh tay",
		},
		topic: "museums",
	},
	{
		id: 517,
		name: "admire",
		pronounce: "əd'maiə",
		explain: "to respect someone for what they are or for what they have done",
		meaning: "(v): khâm phục, thán phục; hâm mộ, ngưỡng mộ",
		example: {
			english: "I admire all the effort the museum put into organizing this wonderful exhibit",
			vietnamse: "Tôi khâm phục tất cả nỗ lực của bảo tàng đã dành thời gian tổ chức cuộc triển lãm kỳ diệu này",
		},
		topic: "museums",
	},
	{
		id: 518,
		name: "collection",
		pronounce: "kə'lekʃn",
		explain: "a group of objects, often of the same sort, that have been collected",
		meaning: "(n): ‹sự› sưu tầm, thu thập; ‹sự/tiền› quyên góp; nhóm người/đồ vật",
		example: {
			english: "The museum's collection contained many works donated by famous collectors",
			vietnamse: "Bộ sưu tập của viện bảo tàng có nhiều tác phẩm được tặng bởi các nhà sưu tập nổi tiếng",
		},
		topic: "museums",
	},
	{
		id: 519,
		name: "criticism",
		pronounce: "'kritisizm",
		explain: "the act of expressing disapproval of someone or something and opinions about their faults or bad qualities",
		meaning: "(n): ‹sự/lời› phê bình, chỉ trích, phê phán",
		example: {
			english: "The revered artist's criticism of the piece was particularly insightful",
			vietnamse: "Lời phê bình về tác phẩm của một họa sĩ được kính trọng là đặc biệt sâu sắc",
		},
		topic: "museums",
	},
	{
		id: 520,
		name: "express",
		pronounce: "iks'pres",
		explain: "to show or make known a feeling, an opinion, etc. by words, looks, or actions",
		meaning: "(v): biểu lộ, bày tỏ, diễn đạt; gửi nhanh, gửi tốc hành",
		example: {
			english: "The photograph expresses a range of emotions",
			vietnamse: "Bức ảnh biểu lộ đủ loại cảm xúc",
		},
		topic: "museums",
	},
	{
		id: 521,
		name: "fashion",
		pronounce: "'fæʃn",
		explain: "a popular style of clothes, hair, etc. at a particular time or place",
		meaning: "(n): thời trang, mốt; hình dáng, kiểu cách",
		example: {
			english: "The museum's classical architecture has never gone out of fashion",
			vietnamse: "Kiến trúc cổ điển của viện bảo tàng không bao giờ lỗi thời",
		},
		topic: "museums",
	},
	{
		id: 522,
		name: "leisure",
		pronounce: "'leʤə",
		explain: "time that is spent doing what you enjoy",
		meaning: "(n): ‹lúc/thời gian› nhàn rỗi, nhàn hạ",
		example: {
			english: "We can go to the permanent collection at our leisure",
			vietnamse: "Chúng tôi có thể đi góp nhặt/sưu tập thường xuyên vào lúc chúng tôi rảnh rỗi",
		},
		topic: "museums",
	},
	{
		id: 523,
		name: "respond",
		pronounce: "ris'pɔns",
		explain: "to give a spoken or written answer to someone or something",
		meaning: "(v): hồi âm, phúc đáp",
		example: {
			english: "I asked him his name, but he didn't respond.",
			vietnamse: "Tôi đã gọi tên anh ấy nhưng anh ấy không phản hồi",
		},
		topic: "museums",
	},
	{
		id: 524,
		name: "schedule",
		pronounce: "'ʃedju:",
		explain: "to arrange for something to happen at a particular time",
		meaning: "(v): thời gian biểu, lịch trình",
		example: {
			english: "The meeting is scheduled for Friday afternoon",
			vietnamse: "Cuộc họp đã được lên lịch vào trưa thứ 6",
		},
		topic: "museums",
	},
	{
		id: 525,
		name: "significant",
		pronounce: "sig'nifikənt",
		explain: "large or important enough to have an effect or to be noticed",
		meaning: "(n): quan trọng, trọng đại, hệ trọng; đầy ý nghĩa",
		example: {
			english: "There are no significant differences between the two groups of students.",
			vietnamse: "Không có sự khác biệt đáng kể giữa hai nhóm học sinh.",
		},
		topic: "museums",
	},
	{
		id: 526,
		name: "specialize",
		pronounce: "'speʃəlaiz",
		explain: "to become an expert in a particular area of work",
		meaning: "(v): chuyên môn hóa, chuyên về, đặc trưng về",
		example: {
			english: "He specialized in criminal law.",
			vietnamse: "Anh ấy chuyên về pháp luật hình sự.",
		},
		topic: "museums",
	},
	{
		id: 527,
		name: "spectrum",
		pronounce: "'spektrəm",
		explain: "a complete or wide range of related qualities, ideas, etc.",
		meaning: "(n): sự phân bổ theo tính chất, số lượng, hành vi",
		example: {
			english: "Red and violet are at opposite ends of the spectrum.",
			vietnamse: "Màu đỏ và tím được phân bổ ở hai đầu của quang phổ.",
		},
		topic: "museums",
	},
	{
		id: 528,
		name: "assignment",
		pronounce: "ə'sainmənt",
		explain: "a task or piece of work that someone is given to do",
		meaning: "(n): ‹sự› giao việc, phân công; quy là, cho là",
		example: {
			english: "This assignment has to be turned in before midnight",
			vietnamse: "Công việc (được giao) này phải được thực hiện trước nửa đêm",
		},
		topic: "media",
	},
	{
		id: 529,
		name: "choose",
		pronounce: "tʃuz",
		explain: "to decide which thing or person you want",
		meaning: "(v): chọn, chọn lựa",
		example: {
			english: "Alan chooses to read The New York Times over the Wall Street Journal",
			vietnamse: "Alan chọn đọc tờ Thời báo New York hơn là tờ Tạp chí Phố Wall",
		},
		topic: "media",
	},
	{
		id: 530,
		name: "constantly",
		pronounce: "'kɔnstəntli",
		explain: "all the time; repeatedly",
		meaning: "(adv): trung thành, chung thủy, liên tục",
		example: {
			english: "Fashion is constantly changing.",
			vietnamse: "Thời gian luôn tục thay đổi",
		},
		topic: "media",
	},
	{
		id: 531,
		name: "constitute",
		pronounce: "'kɔnstitju:t",
		explain: "to be considered to be something",
		meaning: "(v): tạo thành, thành lập, thiết lập",
		example: {
			english: "His action was interpreted as constituting a threat to the community.",
			vietnamse: "Hành động của anh ấy được thiết lập như một mối nguy hiểm cho cộng đồng",
		},
		topic: "media",
	},
	{
		id: 532,
		name: "decision",
		pronounce: "di'siʤn",
		explain: "a choice or judgment that you make after thinking",
		meaning: "(n): sự quyết định; ‹sự› giải quyết, phân xử, phán quyết",
		example: {
			english: "Newspaper editors often have to make quick decisions about which stories to publish",
			vietnamse: "Các biên tập viên báo chí thường phải ra những quyết định nhanh về chuyện nào được công bố",
		},
		topic: "media",
	},
	{
		id: 533,
		name: "disseminate",
		pronounce: "di'semineit",
		explain: "to spread information, knowledge, etc. so that it reaches many people",
		meaning: "(v): truyền bá; phổ biến, gieo rắc (khắp nơi)",
		example: {
			english: "The media disseminates news across the world",
			vietnamse: "Truyền thông đại chúng phổ biến tin tức đi khắp thế giới",
		},
		topic: "media",
	},
	{
		id: 534,
		name: "impact",
		pronounce: "'impækt",
		explain: "the powerful effect that something has on someone or something",
		meaning: "(n): ‹sự/sức› va mạnh, va chạm mạnh, tác động mạnh, ảnh hưởng mạnh",
		example: {
			english: "The story of the presidential scandal had a huge impact on the public",
			vietnamse: "Bài báo về vụ bê bối của tổng thống đã có tác động to lớn đến công chúng",
		},
		topic: "media",
	},
	{
		id: 535,
		name: "in-depth",
		pronounce: "NA",
		explain: "very thorough and detailed",
		meaning: "(adj): cẩn thận, tỉ mỉ, chu đáo, chi tiết",
		example: {
			english: "The newspaper gave in-depth coverage of the tragic bombing",
			vietnamse: "Tờ báo đưa tin chi tiết về vụ ném bom bi thảm",
		},
		topic: "media",
	},
	{
		id: 536,
		name: "investigate",
		pronounce: "in'vestigeit",
		explain: "to carefully examine the facts of a situation, an event, a crime, etc",
		meaning: "(v): điều tra, nghiên cứu",
		example: {
			english: "Reporters need to thoroughly investigate the facts before publishing their stories",
			vietnamse: "Các phóng viên cần phải điều tra kỹ lưỡng về sự kiện trước khi công bố bài báo về chúng",
		},
		topic: "media",
	},
	{
		id: 537,
		name: "link",
		pronounce: "liɳk",
		explain: "a connection between two or more people or things",
		meaning: "(n): nối, liên kết, liên lạc, kết hợp",
		example: {
			english: "Police suspect there may be a link between the two murders.",
			vietnamse: "Cảnh sát nghi ngờ có thể có một mối liên kết giữa hai vụ giết người.",
		},
		topic: "media",
	},
	{
		id: 538,
		name: "subscribe",
		pronounce: "səbˈskraɪb",
		explain: "to pay an amount of money regularly in order to receive or use something",
		meaning: "(v): đặt mua một cái gì đó định kỳ, đăng ký",
		example: {
			english: "We subscribe to several sports channels (= on TV).",
			vietnamse: "Chúng tôi đăng ký vào một số kênh thể thao (trên TV).",
		},
		topic: "media",
	},
	{
		id: 539,
		name: "thorough",
		pronounce: "'θʌrə",
		explain: "done completely; with great attention to detail",
		meaning: "(adj): thấu đáo, triệt để, hoàn toàn, trọn vẹn; tỉ mỉ, kỹ lưỡng",
		example: {
			english: "The story was the result of thorough research",
			vietnamse: "Bài báo là kết quả của sự nghiên cứu kỹ lưỡng",
		},
		topic: "media",
	},
	{
		id: 540,
		name: "annually",
		pronounce: "'ænjuəli",
		explain: "once a year",
		meaning: "(adv): hàng năm, từng nằm, thường niên (yearly)",
		example: {
			english: "Everyone should get a physical exam annually",
			vietnamse: "Mọi người nên đi khám sức khỏe hàng năm",
		},
		topic: "doctor's office",
	},
	{
		id: 541,
		name: "appointment",
		pronounce: "ə'pɔintmənt",
		explain: "a formal arrangement to meet or visit someone at a particular time",
		meaning: "(n): cuộc hẹn, sự hẹn gặp, giấy mời; chức vụ được bổ nhiệm, sắc lệnh",
		example: {
			english: "I've got a dentist appointment at 3 o'clock.",
			vietnamse: "Tôi đã có một cuộc hẹn với nha sĩ lúc 03:00.",
		},
		topic: "doctor's office",
	},
	{
		id: 542,
		name: "assess",
		pronounce: "ə'ses",
		explain: "to make a judgment about the nature or quality of someone or something",
		meaning: "(v): định giá, đánh giá; ước lượng, định lượng",
		example: {
			english: "The insurance rate Mr. Victor was assessed went up this year after he admitted that he had started smoking again",
			vietnamse: "Mức phí bảo hiểm mà ông Victor được định giá tăng lên sau khi ông thú nhận đã bắt đầu hút thuốc trở lại",
		},
		topic: "doctor's office",
	},
	{
		id: 543,
		name: "diagnose",
		pronounce: "'daiəgnouz",
		explain: "to say exactly what an illness or the cause of a problem is",
		meaning: "(v): chẩn đoán",
		example: {
			english: "After considering the patient's symptoms and looking at his test results, the doctor diagnosed the lump as benign",
			vietnamse: "Sau khi cân nhắc các triệu chứng của bệnh nhân và xem kết quả xét nghiệm của anh ta, vị bác sĩ đã chẩn đoán khối u là u lành",
		},
		topic: "doctor's office",
	},
	{
		id: 544,
		name: "effective",
		pronounce: "ɪˈfektɪv",
		explain: "producing the result that is wanted or intended",
		meaning: "(adj): ‹có› kết quả, tác dụng; ‹có› hiệu quả, hiệu lực; ảnh hưởng",
		example: {
			english: "Howard was pleased to find that the diet recommended by his doctor was quite effective",
			vietnamse: "Howard đã đã cảm thấy hài lòng khi chế độ ăn kiêng được bác sĩ dặn đã hoàn toàn có hiệu quả",
		},
		topic: "doctor's office",
	},
	{
		id: 545,
		name: "instrument",
		pronounce: "'instrumənt",
		explain: "a tool or device used for a particular task",
		meaning: "(n): dụng cụ, công cụ, thiết bị đo đạc; văn kiện, nhạc cụ",
		example: {
			english: "The senior physician carried his instruments in a black leather bag",
			vietnamse: "Người thầy thuốc thâm niên mang những dụng cụ của mình trong một cái túi da màu đen",
		},
		topic: "doctor's office",
	},
	{
		id: 546,
		name: "manage",
		pronounce: "'mænidʤ",
		explain: "to succeed in doing something, especially something difficult",
		meaning: "(v): quản lý, trông nom, điều khiển, sai khiến",
		example: {
			english: "The head nurse's ability to manage her staff through a difficult time caught the hospital administrator's attention",
			vietnamse: "Khả năng quản lý/điều hành nhân viên của người y tá trưởng suốt thời gian khó khăn đã gây sự chú ý của người quản lý bệnh viện",
		},
		topic: "doctor's office",
	},
	{
		id: 547,
		name: "prevent",
		pronounce: "pri'vent",
		explain: "to stop someone from doing something",
		meaning: "(v): ngăn ngừa, ngăn chặn; phòng ngừa, phòng tránh",
		example: {
			english: "By encouraging teenagers not to smoke, doctors are hoping to prevent many cases of cancer",
			vietnamse: "Bằng cách khuyến khích thiếu niên không hút thuốc, các bác sĩ đang hy vọng ngăn chặn được nhiều ca ung thư",
		},
		topic: "doctor's office",
	},
	{
		id: 548,
		name: "recommendation",
		pronounce: ",rekəmen'deiʃn",
		explain: "an official suggestion about the best thing to do",
		meaning: "(n): sự› giới thiệu, tiến cử; ‹sự› gửi gắm, phó thác, dặn dò",
		example: {
			english: "It is important to follow the doctor's recommendations if you want to improve your health",
			vietnamse: "Thật quan trọng để làm theo những dặn dò của bác sĩ nếu bạn muốn cải thiện sức khỏe",
		},
		topic: "doctor's office",
	},
	{
		id: 549,
		name: "record",
		pronounce: "'rekɔ:d",
		explain: "a written account of something that is kept so that it can be looked at and used in the future",
		meaning: "(n): hồ sơ, sổ sách, biên bản, văn thư; kỷ lục; đĩa hát;",
		example: {
			english: "You should keep a record of your expenses",
			vietnamse: "Bạn nên lưu trữ lại hồ sơ lưu trữ chi phí khám bệnh của bạn.",
		},
		topic: "doctor's office",
	},
	{
		id: 550,
		name: "refer",
		pronounce: "ri'fə:",
		explain: "to mention or speak about someone or something",
		meaning: "(v): quy vào, quy cho, viện vào, ám chỉ, nói đến; tham khảo, hỏi ý kiến",
		example: {
			english: "As soon as Agnes referred to the failed treatment, everyone's mood soured",
			vietnamse: "Ngay khi Agnes quy cho việc thất bại là do điều trị, tâm trạng của mọi người đã tỏ ra cáu kỉnh",
		},
		topic: "doctor's office",
	},
	{
		id: 551,
		name: "serious",
		pronounce: "'siəriəs",
		explain: "bad or dangerous",
		meaning: "(adj): nghiêm trọng, trầm trọng; nghiêm trang, đứng đắn, nghiêm túc",
		example: {
			english: "For her dissertation, she made a serious study of women's health care needs in developing nations",
			vietnamse: "Vì luận án của mình, cô ấy đã thực hiện một nghiên cứu nghiêm túc về nhu cầu chăm sóc sức khỏe phụ nữ trong sự phát triển của các dân tộc",
		},
		topic: "doctor's office",
	},
	{
		id: 552,
		name: "aware",
		pronounce: "ə'weə",
		explain: "knowing or realizing something",
		meaning: "(adj): biết, nhận thấy, nhận thức thấy",
		example: {
			english: "My dentist made me aware that I should have an appointment twice a year",
			vietnamse: "Nha sĩ của tôi làm cho tôi biết rằng tôi nên hẹn gặp 2 lần mỗi năm (để khám răng)",
		},
		topic: "dentist's office",
	},
	{
		id: 553,
		name: "catch up",
		pronounce: "NA",
		explain: "to bring up to date",
		meaning: "(v): làm kịp, kịp thời gian",
		example: {
			english: "The dental assistant caught up on her paperwork in between patients",
			vietnamse: "Người trợ tá nha sĩ đã kịp làm công việc giấy tờ của mình giữa các lần khám bệnh nhân",
		},
		topic: "dentist's office",
	},
	{
		id: 554,
		name: "distraction",
		pronounce: "dis'trækʃn",
		explain: "a thing that takes your attention away from what you are doing",
		meaning: "(n): ‹sự› sao nhãng, lãng trí, rối trí; sự giải trí, trò tiêu khiển",
		example: {
			english: "To provide a distraction from the noise, Luisa's dentist offered her a pair of earphones",
			vietnamse: "Để tránh khỏi tiếng ồn, nha sĩ của Luisa đã đưa ra cho cô một cặp tai nghe",
		},
		topic: "dentist's office",
	},
	{
		id: 555,
		name: "encouragement",
		pronounce: "in'kʌridʤmənt",
		explain: "the act of encouraging someone to do something",
		meaning: "(n): khuyến khích, cổ vũ, niềm động viên",
		example: {
			english: "Let me offer you some encouragement about your crooked teeth",
			vietnamse: "Để tôi sẵn sàng cho anh vài sự động viên về hàm răng lệch lạc của anh",
		},
		topic: "dentist's office",
	},
	{
		id: 556,
		name: "evident",
		pronounce: "'evidənt",
		explain: "clear; easily seen",
		meaning: "(adj): rõ ràng, hiển nhiên, rành rành",
		example: {
			english: "The presence of a wisdom tooth was not evident until the dentist started to examine the patient",
			vietnamse: "Sự có mặt của cái răng khôn thì không rõ ràng cho đến khi nha sĩ bắt đầu khám bệnh nhân",
		},
		topic: "dentist's office",
	},
	{
		id: 557,
		name: "habit",
		pronounce: "'hæbit",
		explain: "a thing that you do often and almost without thinking",
		meaning: "(n): thói quen, tập quán",
		example: {
			english: "The patient had a habit of grinding his teeth during his sleep",
			vietnamse: "Bệnh nhân có một thói quen nghiến răng ken két trong khi ngủ",
		},
		topic: "dentist's office",
	},
	{
		id: 558,
		name: "illuminate",
		pronounce: "i'ju:mineit",
		explain: "to shine light on something",
		meaning: "(v): chiếu sáng, soi sáng; giải thích rõ, làm sáng tỏ",
		example: {
			english: "Let me turn on more lights to properly illuminate the back teeth",
			vietnamse: "Để tôi bật thêm đèn để chiếu sáng đúng mức hàm răng đen",
		},
		topic: "dentist's office",
	},
	{
		id: 559,
		name: "irritate",
		pronounce: "'iriteit",
		explain: "to annoy someone, especially by something you continuously do",
		meaning: "(v): kích thích; làm tấy lên, làm rát",
		example: {
			english: "Aspirin irritates my stomach",
			vietnamse: "Aspirin kích ứng dạ dày của tôi",
		},
		topic: "dentist's office",
	},
	{
		id: 560,
		name: "overview",
		pronounce: "ˈoʊvərˌvyu",
		explain: "a general description something",
		meaning: "(n): chung, tổng quan, tổng quát",
		example: {
			english: "I did a quick overview of your teeth and they look in good shape",
			vietnamse: "Tôi đã khám tổng quát nhanh hàm răng của anh và chúng trông có vẻ tốt",
		},
		topic: "dentist's office",
	},
	{
		id: 561,
		name: "position",
		pronounce: "pə'ziʃn",
		explain: "the place where someone or something is located",
		meaning: "(n): vị trí, chỗ, thế, tư thế; địa vị, chức vụ",
		example: {
			english: "Let me tilt your head to a more comfortable position for you",
			vietnamse: "Để tôi nghiêng đầu anh đến vị trí thoải mái hơn cho anh",
		},
		topic: "dentist's office",
	},
	{
		id: 562,
		name: "regularly",
		pronounce: "'regjuləri",
		explain: "at regular intervals or times",
		meaning: "(adv): đều đặn, thường xuyên; theo quy tắc, có quy củ",
		example: {
			english: "She brushes regularly after every meal",
			vietnamse: "Cô ta chải (răng) đều đặn sau mỗi bữa ăn",
		},
		topic: "dentist's office",
	},
	{
		id: 563,
		name: "restore",
		pronounce: "rɪˈstɔr",
		explain: "to bring back a situation or feeling that existed before",
		meaning: "(v): phục hồi, khôi phục",
		example: {
			english: "The cleaning restored the whiteness of my teeth",
			vietnamse: "Việc làm sạch răng đã phục hồi độ trắng của hàm răng tôi",
		},
		topic: "dentist's office",
	},
	{
		id: 564,
		name: "allow",
		pronounce: "ə'lau",
		explain: "to let someone or something",
		meaning: "(v): cho phép; để cho",
		example: {
			english: "My insurance does not allow me to choose my own hospital",
			vietnamse: "Hợp đồng bảo hiểm của tôi không cho tôi chọn bệnh viện cho mình",
		},
		topic: "health",
	},
	{
		id: 565,
		name: "alternative",
		pronounce: "ɔ:l'tə:nətiv",
		explain: "that can be used instead of something else",
		meaning: "(adj): xen kẽ, thay phiên, luân phiên",
		example: {
			english: "To lower the cost of health insurance, my employer chose an alternative method of insuring us",
			vietnamse: "Để hạ thấp chi phí bảo hiểm y tế, sếp của tôi đã chọn phương pháp bảo hiểm luân phiên cho chúng tôi",
		},
		topic: "health",
	},
	{
		id: 566,
		name: "aspect",
		pronounce: "'æspekt",
		explain: "a particular part or feature of a situation, an idea, a problem",
		meaning: "(n): vẻ, bề ngoài; diện mạo",
		example: {
			english: "She felt she had looked at the problem from every aspect.",
			vietnamse: "Cô ấy cảm thấy rằng cô ấy đã nhìn nhận vấn đề từ mọi khía cạnh",
		},
		topic: "health",
	},
	{
		id: 567,
		name: "concern",
		pronounce: "kən'sə:n",
		explain: "a feeling of worry",
		meaning: "(n): liên quan, dính líu; lo lắng, lo ngại, quan tâm",
		example: {
			english: "Whenever I have health concerns, I call my doctor",
			vietnamse: "Hễ khi nào tôi có lo ngại về sức khỏe, tôi gọi cho bác sĩ của mình",
		},
		topic: "health",
	},
	{
		id: 568,
		name: "emphasize",
		pronounce: "ˈɛmfəˌsaɪz",
		explain: "to give special importance to something",
		meaning: "(v): nhấn mạnh, làm nổi bật",
		example: {
			english: "The nurse emphasized the importance of eating a balanced diet",
			vietnamse: "Người y tá nhấn mạnh tầm quan trọng của việc ăn uống theo chế độ cân bằng",
		},
		topic: "health",
	},
	{
		id: 569,
		name: "incur",
		pronounce: "in'kə:",
		explain: "to become subject to",
		meaning: "(v): chịu, gánh, mắc, bị",
		example: {
			english: "I incrurred substantial expenses that my health plan does not coverI incurred substantial expenses that my health plan does not cover",
			vietnamse: "Tôi phải gánh những chi phí phát sinh mà dự án chăm sóc sức khỏe của tôi không bao gồm",
		},
		topic: "health",
	},
	{
		id: 570,
		name: "personnel",
		pronounce: ",pə:sə'nel",
		explain: "the people who work for an organization",
		meaning: "(n): cán bộ, nhân viên",
		example: {
			english: "The employee went to see the director of personnel about taking an extended leave of absence",
			vietnamse: "Người nhân viên đi gặp giám đốc nhân sự về việc xin gia hạn thời gian nghỉ phép",
		},
		topic: "health",
	},
	{
		id: 571,
		name: "policy",
		pronounce: "'pɔlisi",
		explain: "a plan of action agreed or chosen by a political party, a business, etc.",
		meaning: "(n): chính sách, đường lối",
		example: {
			english: "The company's insurance policy did not cover cosmetic surgery",
			vietnamse: "Chính sách bảo hiểm của công ty không bao gồm phẫu thuật thẩm mỹ",
		},
		topic: "health",
	},
	{
		id: 572,
		name: "portion",
		pronounce: "'pɔ:ʃn",
		explain: "one part of something larger",
		meaning: "(n): phần, phần chia",
		example: {
			english: "A portion of my benefits is my health care coverage",
			vietnamse: "Một phần phúc lợi của tôi là bảo hiểm chăm sóc sức khỏe",
		},
		topic: "health",
	},
	{
		id: 573,
		name: "regardless",
		pronounce: "ri'gɑ:dlis",
		explain: "paying no attention, even if the situation is bad or there are difficulties",
		meaning: "(adv): không quan tâm, không chú ý tới, không đếm xỉa tới, bất chấp",
		example: {
			english: "Regardless of the cost, we all need health insurance",
			vietnamse: "Bất chấp phí tổn, tất cả chúng tôi đều cần bảo hiểm y tế",
		},
		topic: "health",
	},
	{
		id: 574,
		name: "salary",
		pronounce: "ˈsæləri",
		explain: "money that employees receive for doing their job",
		meaning: "(n): tiền lương",
		example: {
			english: "he technician was pleased to have a raise in salary after only six months on the job",
			vietnamse: "Người kỹ thuật viên đã hài lòng khi có sự tăng lương chỉ sau 6 tháng làm việc",
		},
		topic: "health",
	},
	{
		id: 575,
		name: "suit",
		pronounce: "sju:t",
		explain: "to be convenient or useful for somebody",
		meaning: "(v): làm cho phù hợp, thích hợp; làm cho thỏa mãn, đáp ứng; tiện, hợp với",
		example: {
			english: "I have finally found a health plan that suits my needs",
			vietnamse: "Rốt cuộc thì tôi đã tìm ra một dự án chăm sóc sức khỏe (mà) phù hợp với như cầu của tôi",
		},
		topic: "health",
	},
	{
		id: 576,
		name: "admit",
		pronounce: "əd'mit",
		explain: "to permit to enter",
		meaning: "(v): thú nhận, thừa nhận; cho vào, nhận vào, kết nạp",
		example: {
			english: "The injured patient was admitted to the unit directly from the emergency room",
			vietnamse: "Bệnh nhân bị thương đã được đưa thẳng vào khoa từ phòng cấp cứu",
		},
		topic: "hopitals",
	},
	{
		id: 577,
		name: "authorize",
		pronounce: "'ɔ:θəraiz",
		explain: "to give official permission for something",
		meaning: "(v): Cho quyền, ủy quyền, cho phép",
		example: {
			english: "We cannot share the test results with you until we have been authorized to do so by your doctor",
			vietnamse: "Chúng tôi không thể chia sẻ kết quả xét nghiệm với anh cho đến khi chúng tôi được cho phép làm như vậy bởi bác sĩ của anh",
		},
		topic: "hopitals",
	},
	{
		id: 578,
		name: "designate",
		pronounce: "'dezignit",
		explain: "a person or group of people or vehicles that travels with someone or something in order to protect or guard them",
		meaning: "(v): chỉ rõ, định rõ",
		example: {
			english: "This floor has been designated a no-smoking area.",
			vietnamse: "Tầng này được chỉ định cấm hút thuốc.",
		},
		topic: "hopitals",
	},
	{
		id: 579,
		name: "escort",
		pronounce: "'eskɔ:k - is'kɔ:t",
		explain: "a person or group of people or vehicles that travels with someone or something in order to protect or guard them",
		meaning: "(n): đội hộ tống; người dẫn đường, vệ sĩ",
		example: {
			english: "You cannot leave the unit on your own; you'll have to wait for an escort",
			vietnamse: "Anh không thể rời đơn vị (khoa...) một mình, anh phải chờ một người dẫn đường",
		},
		topic: "hopitals",
	},
	{
		id: 580,
		name: "identify",
		pronounce: "ai'dentifai",
		explain: "to recognize someone or something and be able to say who or what they are",
		meaning: "(v): nhận ra, nhận biết, nhận diện; đồng nhất, đồng cảm, đồng hóa",
		example: {
			english: "The tiny bracelets identified each baby in the nursery",
			vietnamse: "Những cái vòng tay bé xíu nhận diện từng em bé ở trong phòng dành riêng cho trẻ nhỏ",
		},
		topic: "hopitals",
	},
	{
		id: 581,
		name: "mission",
		pronounce: "'miʃn",
		explain: "an important official job that a person or group of people is given to do",
		meaning: "(n): sứ mệnh, nhiệm vụ",
		example: {
			english: "The nurse explained that the mission of everyone in the unit was to make sure the patients got well as soon as possible",
			vietnamse: "Người y tá đã giải thích rằng nhiệm vụ của mọi người trong khoa là phải đảm bảo rằng các bệnh nhân khỏi bệnh càng sớm càng tốt",
		},
		topic: "hopitals",
	},
	{
		id: 582,
		name: "permit",
		pronounce: "'pə:mit",
		explain: "to allow someone to do something or to allow something to happen",
		meaning: "(v): giấy phép, sự cho phép",
		example: {
			english: "Smoking is not permitted anywhere inside the hospital",
			vietnamse: "Hút thuốc bị cấm ở bất kỳ đâu bên trong bệnh viện",
		},
		topic: "hopitals",
	},
	{
		id: 583,
		name: "pertinent",
		pronounce: "'pɔ:tinənt",
		explain: "appropriate to a particular situation",
		meaning: "(adj): thích hợp, thích đáng, đúng chỗ; đi thẳng vào (vấn đề...)",
		example: {
			english: "He should speak a pertinent problem",
			vietnamse: "Anh ất nên nói thẳng vào vấn đề của anh ấy.",
		},
		topic: "hopitals",
	},
	{
		id: 584,
		name: "procedure",
		pronounce: "procedure",
		explain: "a way of doing something, especially the usual or correct way",
		meaning: "(n): thủ tục, các bước tiến hành (cho đến khi hoàn thành công việc)",
		example: {
			english: "Call the hospital to schedule this procedure for tomorrow",
			vietnamse: "Hãy gọi cho bệnh viện để sắp lịch cho thủ tục này vào ngày mai",
		},
		topic: "hopitals",
	},
	{
		id: 585,
		name: "result",
		pronounce: "ri'zʌlt",
		explain: "a thing that is caused or produced because of something else",
		meaning: "(n): kết quả, đáp số",
		example: {
			english: "The scientific results prove that the new prodedure is not significantly safer than the traditional one",
			vietnamse: "Các kết quả khoa học đã chứng minh rằng thủ tục mới không an toàn hơn đáng kể so với thủ tục truyền thống",
		},
		topic: "hopitals",
	},
	{
		id: 586,
		name: "statement",
		pronounce: "'steitmənt",
		explain: "My bank sends me monthly statements",
		meaning: "(n): sự bày tỏ, sự trình bày, sự phát biểu",
		example: {
			english: "My bank sends me monthly statement",
			vietnamse: "Ngân hàng gởi cho tôi bản trình bày vào mỗi tháng.",
		},
		topic: "hopitals",
	},
	{
		id: 587,
		name: "usually",
		pronounce: "'ju: u li",
		explain: "in the way that is usual or normal; most often",
		meaning: "(adv): thông thường, thường lệ",
		example: {
			english: "I'm usually home by 6 o'clock.",
			vietnamse: "Tôi thường về nhà lúc 6 giờ",
		},
		topic: "hopitals",
	},
	{
		id: 588,
		name: "consult",
		pronounce: "kən'sʌlt",
		explain: "to go to someone for information or advice",
		meaning: "(v): hỏi ý kiến, tham khảo",
		example: {
			english: "If the pain continues, consult your doctor.",
			vietnamse: "Nếu cơn đau vẫn tiếp tục, thì bạn tham khảo ý kiến bác sĩ của bạn.",
		},
		topic: "pharmacy",
	},
	{
		id: 589,
		name: "control",
		pronounce: "kən'troul",
		explain: "the ability to make someone or something do what you want",
		meaning: "(v): kiểm tra, kiểm soát; điều khiển, chỉ huy",
		example: {
			english: "Please take your medication every day to control your high blood pressure",
			vietnamse: "Vui lòng uống thuốc mỗi ngày để kiểm soát huyết áp cao của ông",
		},
		topic: "pharmacy",
	},
	{
		id: 590,
		name: "convenient",
		pronounce: "kən'vi:njənt",
		explain: "useful, easy, or quick to do; not causing problems",
		meaning: "(adj): thuận lợi, thuận tiện; ở gần, dễ đi đến",
		example: {
			english: "Is this a convenient location for you to pick up your prescription?",
			vietnamse: "Đây có phải là một địa điểm thuận tiện cho anh lấy toa thuốc của mình không?",
		},
		topic: "pharmacy",
	},
	{
		id: 591,
		name: "detect",
		pronounce: "di'tekt",
		explain: "to discover something",
		meaning: "(v): dò ra, tìm ra, khám phá ra, phát hiện ra",
		example: {
			english: "The tests are designed to detect the disease early.",
			vietnamse: "Các xét nghiệm này được thiết kế để phát hiện bệnh sớm.",
		},
		topic: "pharmacy",
	},
	{
		id: 592,
		name: "factor",
		pronounce: "'fæktə",
		explain: "one of several things that cause or influence something",
		meaning: "(n): nhân tố, yếu tố",
		example: {
			english: "Could my cat be a factor contributing to my asthma?",
			vietnamse: "Con mèo của tôi có thể là một yếu tố góp phần cho bệnh hen suyễn của tôi hay không?",
		},
		topic: "pharmacy",
	},
	{
		id: 593,
		name: "interaction",
		pronounce: ",intər'ækʃn",
		explain: "communicate with somebody, especially while you work, play or spend time with them",
		meaning: "(n): ‹sự› tương tác, ảnh hưởng lẫn nhau, tác động qua lại",
		example: {
			english: "My pharmacist was concerned about the interaction of the two medications I was prescribed",
			vietnamse: "Dược sĩ của tôi lo lắng về sự tương tác của 2 loại thuốc mà tôi được kê toa",
		},
		topic: "pharmacy",
	},
	{
		id: 594,
		name: "limit",
		pronounce: "'limit",
		explain: "a point at which something stops being possible or existing",
		meaning: "(n): giới hạn, hạn định, ranh giới",
		example: {
			english: "We were reaching the limits of civilization.",
			vietnamse: "Chúng tôi đã đạt đến giới hạn của nền văn minh.",
		},
		topic: "pharmacy",
	},
	{
		id: 595,
		name: "monitor",
		pronounce: "'mɔnitə",
		explain: "to watch and check something over a period of time",
		meaning: "(v): màn hình vi tính, lớp trưởng",
		example: {
			english: "The patient had weekly appointments so that the doctor could monitor their progress",
			vietnamse: "Người bệnh có các cuộc hẹn hàng tuần để cho bác sĩ có thể theo dõi tiến triển của họ",
		},
		topic: "pharmacy",
	},
	{
		id: 596,
		name: "potential",
		pronounce: "pə'tenʃəl",
		explain: "that can develop into something or be developed in the future",
		meaning: "(adj): tiềm tàng, tiềm năng, tiềm lực, khả năng",
		example: {
			english: "To avoid any potential side effects from the medication, be sure to tell your doctor all the drugs you are currently taking",
			vietnamse: "Để tránh bất kỳ phản ứng phụ tiềm tàng nào từ thuốc, hãy bảo đảm là kể cho bác sĩ tất cả loại thuốc mà bạn hiện tại đang uốn",
		},
		topic: "pharmacy",
	},
	{
		id: 597,
		name: "sample",
		pronounce: "ˈsæmpl",
		explain: "a small amount of a substance taken from a larger amount and tested in order to obtain information about the substance",
		meaning: "(n): mẫu, hàng mẫu",
		example: {
			english: "A sample of the population taking the new medicine was surveyed to determine whether it caused side effects",
			vietnamse: "Một số người dân uống loại thuốc mới đã được khảo sát để xác định xem nó có gây ra phản ứng phụ hay không",
		},
		topic: "pharmacy",
	},
	{
		id: 598,
		name: "sense",
		pronounce: "sens",
		explain: "a feeling about something important",
		meaning: "(n): giác quan, cảm giác, ý thức, tri thức; sự thông minh, khả năng phán đoán",
		example: {
			english: "I got the sense it would be better to get my prescription filled right away",
			vietnamse: "Tôi có cảm giác sẽ tốt hơn khi uống theo toa của tôi ngay lập tức",
		},
		topic: "pharmacy",
	},
	{
		id: 599,
		name: "volunteer",
		pronounce: ",vɔlən'tiə",
		explain: "to offer to do something without being forced to do it",
		meaning: "(n): tình nguyện viên, người xung phong",
		example: {
			english: "Several staff members volunteered for early retirement",
			vietnamse: "Một số nhân viên tình nguyện nghỉ hưu sớm",
		},
		topic: "pharmacy",
	},
];

export const VocabularyContext = createContext();

export default function Vocabulary({ children }) {
	return (
		<VocabularyContext.Provider value={data}>
			{children}
		</VocabularyContext.Provider>
	);
}
