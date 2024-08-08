package main

import (
    "database/sql"
    "log"
    "net/http"
    "github.com/gorilla/mux"
    "github.com/gorilla/handlers"
    _ "github.com/mattn/go-sqlite3"
)

var db *sql.DB

func main() {
    var err error
    db, err = sql.Open("sqlite3", "./notes.db")
    if err != nil {
        log.Fatal(err)
    }
    defer db.Close()

    // データベースの初期化
    initDB()

    // ルーターの設定
    router := mux.NewRouter()
    router.HandleFunc("/notes", getNotes).Methods("GET")
    router.HandleFunc("/notes/{id}", getNote).Methods("GET")
    router.HandleFunc("/notes", createNote).Methods("POST")
    router.HandleFunc("/notes/{id}", updateNote).Methods("PUT")
    router.HandleFunc("/notes/{id}", deleteNote).Methods("DELETE")

    // CORSの設定
    headers := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
    methods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "OPTIONS"})
    origins := handlers.AllowedOrigins([]string{"*"}) // 特定のオリジンを指定する場合は、["http://example.com"] などに変更

    // サーバーの起動
    log.Fatal(http.ListenAndServe(":8000", handlers.CORS(headers, methods, origins)(router)))
}

func initDB() {
    sqlStmt := `CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        content TEXT,
        folder_id INTEGER,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS folders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT
    );`
    _, err := db.Exec(sqlStmt)
    if err != nil {
        log.Fatalf("%q: %s\n", err, sqlStmt)
    }
}

// ハンドラ関数の実装
func getNotes(w http.ResponseWriter, r *http.Request) {
    // 実装予定
}

func getNote(w http.ResponseWriter, r *http.Request) {
    // 実装予定
}

func createNote(w http.ResponseWriter, r *http.Request) {
    // 実装予定
}

func updateNote(w http.ResponseWriter, r *http.Request) {
    // 実装予定
}

func deleteNote(w http.ResponseWriter, r *http.Request) {
    // 実装予定
}
