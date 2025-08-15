// import React from "react";
// import { SafeAreaView, ScrollView } from "react-native";
// import ListingCard from "./src/components/ListingCard"; // 경로 확인 필수

// export default function App() {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <ScrollView contentContainerStyle={{ padding: 20 }}>
//         <ListingCard
//           price="7,000원"
//           title="캠핑용 조명 랜턴"
//           location="서울 마포구"
//         />
//         <ListingCard
//           price="12,000원"
//           title="접이식 캠핑 체어"
//           location="부산 해운대구"
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

import React from 'react';
import Register from './pages/register'; // 경로는 실제 위치에 맞게 수정

export default function App() {
  return <Register />;
}