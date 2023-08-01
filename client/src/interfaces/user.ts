export namespace User {
  //TOOD: 세션 객체를 바로 사용하다 보니
  // 옵셔널로 받으라고 build 중 type error 발생
  // 이 부분 수정해야함 optional -> required
  export interface Profile {
    name?: string;
    email?: string;
    image?: string;
    id?: string;
  }
}
