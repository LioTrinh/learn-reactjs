### package.json

- Phần mô tả package dùng cho dự án

### index.js

- file đầu vào của app

### component

- chia nhỏ 1 giao diện lớn thành giao diện nhỏ

<!-- <p>
Xin chào {name} - {age} - {isMale ? 'Male' : 'Female'}
</p>
{isMale ? <p>Male</p> : <p>Female</p>}
{isMale && <p>Male</p>}
{!isMale && <p>Female</p>}

{isMale && (
<>
<p>Male</p>
<p>Male</p>
<p>Male</p>
</>
)}

<p>{student.name}</p>

<ul>
{colorList.map(colors => (
<li style={{ color }}>{color}</li>

))}
</ul> -->

### Package install

- npm i --save classnames: build classname string

### Side affects:

- những thứ tác động chạy bên ngoài components

* Call API
  ++ Cần clean up: gọi API, tương tác DOM
  ++ không cần clean up: subsrciption, setTimeOut, setInterval

### useEffect:

- sử dụng cho side effect
- Thực thi sau mỗi lần render
- Có thể sử dụng nhiều thèn trong components

## Custum hooks

- Đặt tên cho đúng
- Viết là 1 cái hooks tự định nghĩa
- Return về dữ liệu(data, object,...)
- Tách riêng biệt phần logic ra khỏi phần UI
- Chia sẽ logic giữa các components

### Routing

- Package: npm i --save react-router-dom
- Router: component bao bọc các component khác của routing (using BrowserRouter)
- Route: Render component khi match với patch
- Switch: chỉ render route đầu tiên match path
- Redirect: Redirect từ path này sang path khác
- Link: Đi tới path tương ứng
- NavLink: Giống như Link nhưng có thêm activeClassName

### Link and NavLink

- NaLink tự động thêm action class
- NaLink styles đặt biệt cho thèn mình muốn làm dựa vào class được thêm vào
- NaLink thường dùng cho memu

### Route and Switch

- Route: thèn nào thỏa điều kiện thì render
- Switch(Sử dụng trong Route): chạy từ trên xuống dưới thèn nào match với patch hiện tại thì nó dừng lại luôn.

### Route matching

- Sài exact để kiểm tra đường dẫn match.
- Sử dụng cho routing cha exact= false.
- exact = true cho router con.

### Redirect

- Router từ trang này qua trang khác

### Routing Hooks

- useHistory(): Trả về history instance, dùng để navigate
- useLocation(): Trả về location object của URL hiện tại
- useParams(): Trả về patch params object của URL hiện tại
- useRouteMatch(): Trả về match object của URL hiện tại

### Path params and URL params

- Path params: tương ứng với cái route bạn định nghĩa
- URL params: phần sau dấu chấm hỏi

### Nested routing

### Query-string

- npm i --save query-string

### Config Prettier

- https://prettier.io/

### Material UI

- Package: \$ npm install @material-ui/core
- Material Icons: \$npm install @material-ui/icons

### API module (axios)

- Package: npm i --save axios
- axiosClient: tôi muốn thêm all header từ request

### React hook form

- useForm: giúp tạo object form.
- Controller: định nghĩa những cái form control
- ErrorMessage: show cái error khi cần thiết
- Package:npm install --save react-hook-form yup @hookform/resolvers @hookform/error-message

- Nguyên tắt tổ chức

* 1 form gồm nhiều form field
* Form field là cầu nối giữa form and UI control, giúp bind form value vào UI control
* UI control là các thẻ input, select hay các custom component của UI lib

### Reducer

- Là một function nhận vào 2 tham số:
  ++ State:
  ++ Action: 2 loai, type and pageload
  => tùy vào thông tin action gởi lên mà biết đổi state hiện tại tương ứng
- setup store sử dụng hàm createStore của redux
- Dispatch: thực thi 1 action nào đó
- Action: JS object

### Reducer tookkit

- configurestore(): có sẵn redux devtools and redux-thunk để
  thực hiện async actions.

- CreateReducer():
- ImmerJS
- Có return cần phải clone data
- createSlice(): tự tạo reducer with action tương ứng

### Ctrl + D

- Edit nhiều component

### Ctrl + /

- Remove comment line

### Redux persist

### material-ui

- Popover: chỉnh sửa menu sổ xuống
