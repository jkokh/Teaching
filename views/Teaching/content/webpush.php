
<div id='content'>
	<h1>Web Push</h1>
    <form>
        <p><input type="text" placeholder="Message title" id="title"></p>
        <p><input type="text" placeholder="Image url" id="imageUrl"></p>
        <p><textarea placeholder="Message" id="message" rows="6"></textarea></p>
        <p><input type="text" id="url" placeholder="Url"></p>
        <p><input type="text" id="badge" placeholder="Badge (integer number for Android only)"></p>
        <p><input type="text" placeholder="DeviceId" id="deviceId"></p>
        <p>
            Delay before send in seconds:
            <select name="delay" id="delay">
                <option value="0" selected>0</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
        </p>
        <button type="button" onclick="sendNotification();" id="button">Send push notification</button>
    </form>
</div>

