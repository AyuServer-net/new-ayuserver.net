export async function getMinecraftOnlinePlayers() {
    const serverIp = 'mc.ayuserver.net'; // サーバーのIP
    const serverPort = 25565; // サーバーのポート（デフォルトは25565）
  
    try {
      const response = await fetch(`https://mcapi.us/server/status?ip=${serverIp}&port=${serverPort}`);
      const data = await response.json();
  
      if (data.online) {
        return data.players.now; // オンライン人数を返す
      } else {
        console.error('サーバーがオフラインです');
        return 0;
      }
    } catch (error) {
      console.error('Minecraftサーバーの状態取得に失敗しました', error);
      return 0;
    }
  }
  